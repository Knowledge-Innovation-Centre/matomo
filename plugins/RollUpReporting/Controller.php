<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

namespace Piwik\Plugins\RollUpReporting;


use Piwik\Common;
use Piwik\Container\StaticContainer;
use Piwik\Piwik;

class Controller extends \Piwik\Plugin\ControllerAdmin
{
    function getNoAccessNotification()
    {
        $this->checkTokenInUrl();
        $idSite = Common::getRequestVar('idSite', 0, 'int');
        $model = StaticContainer::get('Piwik\Plugins\RollUpReporting\Model');
        if ($model->isRollUpIdSite($idSite)) {
            $message = '';
            Piwik::postEvent('RolUpReporting.getNoAccessNotification', array(&$message));

            return json_encode(array('message' => $message));
        }
    }
}