/**
 * Created by Shadow on 12/03/2015.
 */
app.controller('PanelController', ['$scope', '$rootScope', 'dataExchange', function ($scope, $rootScope, dataExchange) {

    var dateToString = function (date) {
        return (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()) + ' / ' +
            (date.getMonth() + 1 < 10 ?  '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + ' / ' +
            (date.getFullYear().toString());
    }, successGetContactsCallback, errorGetContactsCallback;

    successGetContactsCallback = function (data) {
        //contacts.loadLocalStorage();
        var i, contacts;
        contacts = data;
        for (i = 0; i < contacts.tabContacts.length; i += 1) {
            if (contacts.tabContacts[i].birthdate) {
                contacts.tabContacts[i].birthDateToggled = dateToString(new Date(contacts.tabContacts[i].birthdate));
            }
        }
        return contacts;
    };
    errorGetContactsCallback = function (err) {
        alert(err);
    };

    $scope.ident = 0;
    $scope.listeContacts = function () {
        //var contacts = new Contacts();
        dataExchange.getContacts(successGetContactsCallback, errorGetContactsCallback);
    }();

    $scope.selectTab = function (setTab) {
        $scope.tab = setTab;
    };

    $scope.isSelected = function (checkTab) {
        return $scope.tab === checkTab;
    };
}]);