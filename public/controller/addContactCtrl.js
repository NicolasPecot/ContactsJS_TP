/**
 * Created by Shadow on 12/03/2015.
 */
app.controller('AddContactController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.contact = new Contact();
    $scope.addContact = function () {
        $scope.ident += 1;
        $scope.contact.setIdent($scope.ident);
        $scope.listeContacts.addContact(this.contact);
        $scope.listeContacts.saveLocalStorage();
        $scope.contact = new Contact();
        $scope.tab = 1;
    };
}]);