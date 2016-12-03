(function () {

    'use strict';

    var logger = require('../configuration/configuration_log').logger,
        _ = require('underscore'),
        dao = require('../dao/dao');

    var Contacts = function (tabcontacts) {
        this.tabContacts = tabcontacts || [];
    };

    Contacts.prototype.constructor = Contacts;

    /**
     * Getter for the contacts list
     * @returns {*|Array}
     */
    Contacts.prototype.getContacts = function () {
        logger.debug('Contacts.getContacts');
        return this.tabContacts;
    };

    /**
     * Sets the contact list from an array
     * @param listContacts list of contacts
     */
    Contacts.prototype.setContacts = function (listContacts) {
       logger.debug('Conctacts.setContacts');
       this.tabContacts = listContacts;
    };

    /**
     * Adds a contact to the Contacts list
     * @param contact contact to add
     */
    Contacts.prototype.addContact = function(contact) {
        logger.debug('Contacts.addContact');
        this.tabContacts.push(contact);
    };

    module.exports = Contacts;
})();