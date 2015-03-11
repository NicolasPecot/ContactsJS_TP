/**
 * Created by Shadow on 11/03/2015.
 */
(function () {

    var getContacts,
        addContact,
        deleteContact,
        modifyContact;

    getContacts = function (successCallback, errorCallback) {
        $http.get('/contacts').success(successCallback).error(errorCallback);
    };
    addContact = function (contact, successCallback, errorCallback) {
        $http.post('/addcontact').success(successCallback).error(errorCallback);
    };
    deleteContact = function (contact, successCallback, errorCallback) {
        $http.get('/deletecontact').success(successCallback).error(errorCallback);
    };
    modifyContact = function (contact, successCallback, errorCallback) {
        $http.get('modifycontact').success(successCallback).error(errorCallback);
    };
})();