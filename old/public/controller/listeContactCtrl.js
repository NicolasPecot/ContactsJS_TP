/**
 * Created by Shadow on 12/03/2015.
 */
app.controller('ListeController', ['$rootScope', '$scope', 'dataExchange', function ($rootScope, $scope, de) {
    $scope.listeContacts = $scope.listeContacts.tabContacts;
    $scope.filtre = 'nom';
    $scope.filtrer = function (filtre) {
        if (filtre === 1) {
            $scope.filtre = 'nom';
        } else if (filtre === 2) {
            $scope.filtre = '-nom';
        }
    };

    $scope.deleteContact = function () {
        var successDeleteCallback, errorDeleteCallback;

        successDeleteCallback = function (data) {
            // recharger la page
        };
        errorDeleteCallback = function (err) {
            // Afficher message d'erreur
        };
        //$rootScope.Contacts.deleteContact($scope.selectedContact);
        de.deleteContact($scope.selectedContact, successDeleteCallback, errorDeleteCallback);
    };

    $scope.editContact = function () {
        var successEditCallback, errorEditCallback;

        successEditCallback = function (data) {
            // recharger la page / le contact
        };
        errorEditCallback = function (err) {
            // Afficher message d'erreur
        };
        de.modifyContact($scope.selectedContact, successEditCallback, errorEditCallback);
    };

    $scope.addPicture = function () {

    };
}]);