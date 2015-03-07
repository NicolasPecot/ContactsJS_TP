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
    describe('Test de suppression de contacts', function () {
        before(function () {
            contactsTests.tabContacts = [
                {
                    ident: 1,
                    name: 'klhsdfj',
                    tel:'01'
                }, {
                    ident: 2,
                    name: 'lkjhsdfkhd',
                    tel: '02'
                }, {
                    ident: 3,
                    name: 'ldfjg',
                    tel: '03'
                }
            ];
        });
        after(function () {
            contactsTests.tabContacts = [];
        });
        it('suppression contact inexistant', function () {
            var contactToDelete = {ident:4, name:'sjdhf', tel:'04'};

            contactsTests.removeContact(contactToDelete);
            assert.notEqual(2, contactsTests.tabContacts.length);
        });
        it('suppression contact existant', function () {
            var contactToDelete = {
                ident: 2,
                name: 'lkjhsdfkhd',
                tel: '02'
            };
            contactsTests.removeContact(contactToDelete);
            assert.equal(2, contactsTests.tabContacts.length);
        });
    });
});