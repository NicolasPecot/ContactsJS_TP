/**
 * Created by Shadow on 12/03/2015.
 */
app.controller('PanelController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    var dateToString = function (date) {
        return (date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()) + ' / ' +
            (date.getMonth() + 1 < 10 ?  '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()) + ' / ' +
            (date.getFullYear().toString());
    };

    $scope.ident = 0;
    $scope.listeContacts = function () {
        var i, contacts = new Contacts();
        // TODO : changer le chargement depuis le localStorage vers le chargement depuis le serveur
        contacts.loadLocalStorage();
        for (i = 0; i < contacts.tabContacts.length; i += 1) {
            if (contacts.tabContacts[i].birthdate) {
                contacts.tabContacts[i].birthDateToggled = dateToString(new Date(contacts.tabContacts[i].birthdate));
            }
        }
        return contacts;
    }();
    $scope.selectTab = function (setTab) {
        $scope.tab = setTab;
    };
    $scope.isSelected = function (checkTab) {
        return $scope.tab === checkTab;
    };
}]);