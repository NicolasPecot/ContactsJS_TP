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
        var params = $.param({contact: contact});
        $http.post('/addcontact?' + params).success(successCallback).error(errorCallback);
    };
    deleteContact = function (contact, successCallback, errorCallback) {
        var params = $.param({contactId: contact.getIdent()});
        $http.get('/deletecontact?' + params).success(successCallback).error(errorCallback);
    };
    modifyContact = function (contact, successCallback, errorCallback) {
        var params = $.param({contact: contact});
        $http.get('modifycontact?' + params).success(successCallback).error(errorCallback);
    };

    return {
        "getContacts": getContacts,
        "addContact": addContact,
        "deleteContact": deleteContact,
        "modifyContact": modifyContact
    }
})();