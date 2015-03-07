var contacts = require('../contacts.js'),
    assert = require('assert');

describe('Test des fonctionnalités de Contacts', function () {
    'use strict';
    var contactsTests = new contacts(),
        contact;

    describe('Test d insertion de contacts', function () {
        before(function () {
            contact = {
                id: 1,
                name: 'canard',
                tel: '0102030405'
            };
        });
        after(function () {
            contactsTests.tabContacts = [];
        });
        it('insertion', function () {
            assert(1, contactsTests.addContact(contact));
        });
    });
});