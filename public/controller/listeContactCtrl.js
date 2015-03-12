/**
 * Created by Shadow on 12/03/2015.
 */
app.controller('ListeController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    this.listeContacts = $scope.listeContacts.tabContacts;
    $scope.filtre = 'nom';
    $scope.filtrer = function (e) {
        if (e === 1) {
            $scope.filtre = 'nom';
        } else if (e === 2) {
            $scope.filtre = '-nom';
        }
    };
}]);