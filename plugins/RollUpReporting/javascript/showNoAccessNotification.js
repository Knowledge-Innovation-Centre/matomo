/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    window.CoreHome.Matomo.on("matomoPageChange", checkAndDisplayNotification);
    window.CoreHome.Matomo.on("piwikPageChange", checkAndDisplayNotification);
    checkAndDisplayNotification();
  });
})();

function checkAndDisplayNotification() {
  //skip if its a login page or not a Visitor Log page
  if (
    window.broadcast.isLoginPage() ||
    window.broadcast.getParamValue('subcategory', window.location.href) !== 'Live_VisitorLog'
  ) {
    return;
  }
  var ajaxRequest = new ajaxHelper();
  var requestParams = {
    module: 'RollUpReporting',
    action: 'getNoAccessNotification',
    format: 'JSON'
  };
  ajaxRequest.addParams(requestParams, 'get');
  ajaxRequest.withTokenInUrl();
  ajaxRequest.setCallback(function (response) {
    try {
      var data = JSON.parse(response);
      var UI = require('piwik/UI');
      var notification = new UI.Notification();
      if (data.message) {
        notification.show(data.message, {
          context: 'info',
          id: 'RollupPartialAccessNotification'
        });
      } else {
        notification.remove('RollupPartialAccessNotification');
      }
    } catch (e) {

    }
  });
  ajaxRequest.setFormat('html');
  ajaxRequest.send();
}
