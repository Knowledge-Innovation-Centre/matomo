<?php
/**
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret or copyright law.
 * Redistribution of this information or reproduction of this material is strictly forbidden
 * unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */

namespace Piwik\Plugins\RollUpReporting;

use Piwik\Common;
use Piwik\Container\StaticContainer;
use Piwik\Updater;
use Piwik\Updates as PiwikUpdates;
use Piwik\Updater\Migration\Factory as MigrationFactory;
use Piwik\Plugins\SitesManager\API as SitesManagerAPI;

/**
 * Update for version 4.0.0
 */
class Updates_4_1_1 extends PiwikUpdates
{
    /**
     * @var MigrationFactory
     */
    private $migration;

    public function __construct(MigrationFactory $factory)
    {
        $this->migration = $factory;
    }

    public function getMigrations(Updater $updater)
    {
        $idSites = SitesManagerAPI::getInstance()->getAllSitesId();

        $model = StaticContainer::get('Piwik\Plugins\RollUpReporting\Model');
        $rollupIdSites = [];

        foreach ($idSites as $idSite) {
            if ($model->isRollUpIdSite($idSite)) {
                $rollupIdSites[] = $idSite;
            }
        }

        if (empty($rollupIdSites)) {
            return [];
        }

        $idSitesToDelete = array_unique($rollupIdSites);

        $idSitesToDeleteString = implode(',', $idSitesToDelete);

        $migration = $this->migration->db->sql(
            $sqlQuery = 'Delete from ' . Common::prefixTable('archive_invalidations') .
                ' where idsite in(' . $idSitesToDeleteString . ') and name in ' .
                "(select concat('done', hash) from " . Common::prefixTable('segment') . ' where enable_only_idsite NOT IN (' . $idSitesToDeleteString . ') and enable_only_idsite!=0)'
        );

        return array(
            $migration
        );
    }

    public function doUpdate(Updater $updater)
    {
        $updater->executeMigrations(__FILE__, $this->getMigrations($updater));
    }
}
