/**
 * Created by Shadow on 18/04/2015.
 */

(function () {

    "use strict";

    var logger = require('../configuration/configuration_log').logger,
        _ = require('underscore'),
        dao = require('../dao/dao');

    var Contacts = function () {
        this.tabContacts = tabcontacts || [];
    };

    Contacts.prototype.constructor = Contacts;

    Contacts.prototype.getContacts = function (contact) {

    };

    module.exports = Contacts;
})();