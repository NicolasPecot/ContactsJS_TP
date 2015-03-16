/**
 * Created by Shadow on 12/03/2015.
 */
app.controller('ListeController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    this.listeContacts = $scope.listeContacts.tabContacts;
    $scope.filtre = 'nom';
    $scope.filtrer = function (filtre) {
        if (filtre === 1) {
            $scope.filtre = 'nom';
        } else if (filtre === 2) {
            $scope.filtre = '-nom';
        }
    };

    $scope.deleteContact = function () {

    };

    $scope.editContact = function () {

    };

    $scope.addPicture = function () {

    };
}]);