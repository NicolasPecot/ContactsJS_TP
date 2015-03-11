/**
 * Created by Shadow on 11/03/2015.
 */
(function () {

    var getContacts;

    getContacts = function (successCallback, errorCallback) {
        $http.get('/getContact').success(successCallback).error(errorCallback);
    };
})();