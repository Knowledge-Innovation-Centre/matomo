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

use Piwik\Config;

/**
 * Class Configuration
 * @package Piwik\Plugins\MediaAnalytics
 */
class Configuration
{
    const FORCE_AGGREGATE_RAW_DATA_FOR_DAY_SEGMENT = 'force_aggregate_raw_data_for_day_segment';
    const FORCE_AGGREGATE_RAW_DATA_FOR_DAY = 'force_aggregate_raw_data_for_day';
    const DISABLE_PROCESSING_UNIQUE_VISITORS_FOR_SEGMENT = 'disable_processing_unique_visitors_for_segment';

    const DEFAULT_FORCE_AGGREGATE_RAW_DATA_FOR_DAY_SEGMENT = 1;
    const DEFAULT_FORCE_AGGREGATE_RAW_DATA_FOR_DAY = 1;
    const DEFAULT_DISABLE_PROCESSING_UNIQUE_VISITORS_FOR_SEGMENT = 0;

    public function install()
    {
        $config = $this->getConfig();

        $rollUpConfig = $config->RollUpReporting;
        if (empty($rollUpConfig)) {
            $rollUpConfig = array();
        }

        if (!isset($rollUpConfig[self::FORCE_AGGREGATE_RAW_DATA_FOR_DAY])) {
            $rollUpConfig[self::FORCE_AGGREGATE_RAW_DATA_FOR_DAY] = self::DEFAULT_FORCE_AGGREGATE_RAW_DATA_FOR_DAY;
        }

        if (!isset($rollUpConfig[self::FORCE_AGGREGATE_RAW_DATA_FOR_DAY_SEGMENT])) {
            $rollUpConfig[self::FORCE_AGGREGATE_RAW_DATA_FOR_DAY_SEGMENT] = self::DEFAULT_FORCE_AGGREGATE_RAW_DATA_FOR_DAY_SEGMENT;
        }

        if (!isset($rollUpConfig[self::DISABLE_PROCESSING_UNIQUE_VISITORS_FOR_SEGMENT])) {
            $rollUpConfig[self::DISABLE_PROCESSING_UNIQUE_VISITORS_FOR_SEGMENT] = self::DEFAULT_DISABLE_PROCESSING_UNIQUE_VISITORS_FOR_SEGMENT;
        }

        $config->RollUpReporting = $rollUpConfig;

        $config->forceSave();
    }

    public function shouldForceAggregateRawDataForDay()
    {
        $value = $this->getConfigValue(self::FORCE_AGGREGATE_RAW_DATA_FOR_DAY, self::DEFAULT_FORCE_AGGREGATE_RAW_DATA_FOR_DAY);

        return !empty($value);
    }

    public function shouldForceAggregateRawDataForDaySegment()
    {
        $value = $this->getConfigValue(self::FORCE_AGGREGATE_RAW_DATA_FOR_DAY_SEGMENT, self::DEFAULT_FORCE_AGGREGATE_RAW_DATA_FOR_DAY_SEGMENT);

        return !empty($value);
    }

    public function shouldDisableProcessingUniqueVisitorsForSegment()
    {
        $value = $this->getConfigValue(self::DISABLE_PROCESSING_UNIQUE_VISITORS_FOR_SEGMENT, self::DEFAULT_DISABLE_PROCESSING_UNIQUE_VISITORS_FOR_SEGMENT);

        return !empty($value);
    }

    private function getConfigValue($name, $default)
    {
        $config = $this->getConfig();
        $attribution = $config->RollUpReporting;
        if (isset($attribution[$name])) {
            return $attribution[$name];
        }
        return $default;
    }

    public function uninstall()
    {
        $config = $this->getConfig();
        $config->RollUpReporting = array();
        $config->forceSave();
    }

    private function getConfig()
    {
        return Config::getInstance();
    }
}
