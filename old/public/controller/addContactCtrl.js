/**
 * Created by Shadow on 12/03/2015.
 */
app.controller('AddContactController', ['$scope', '$rootScope', 'dataExchange', function ($scope, $rootScope, dataExchange) {

    $scope.contact = new Contact();
    var successAddContactCallback, errorAddContactCallback;

    successAddContactCallback = function (data) {
        console.log(data);
        $scope.contact = new Contact();
        $scope.tab = 1;
    };

    errorAddContactCallback = function (err) {
        alert('Erreur lors de l\'enregistrement du contact : ' + err);
    };

    $scope.addContact = function () {
        $scope.ident += 1;
        $scope.contact.setIdent($scope.contact);
        dataExchange.addContact(this.contact, successAddContactCallback, errorAddContactCallback);
    };
}]);