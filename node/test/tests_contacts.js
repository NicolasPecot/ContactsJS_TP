var contacts = require('../model/contacts.js'),
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
    describe('Test de modification de contacts', function () {
        before(function () {
            contactsTests.tabContacts = [
                {
                    ident: 1,
                    name: 'klhsdfj',
                    tel:'01',
                    getIdent: function () {return this.ident}
                }, {
                    ident: 2,
                    name: 'lkjhsdfkhd',
                    tel: '02',
                    getIdent: function () {return this.ident}
                }, {
                    ident: 3,
                    name: 'ldfjg',
                    tel: '03',
                    getIdent: function () {return this.ident}
                }
            ];
        });
        after(function () {
            contactsTests.tabContacts = [];
        });
        it('modification contact inexistant', function () {
            var contactToMod = {
                ident: 4,
                name: 'lhsgkf',
                tel: '04',
                getIdent: function () {return this.ident}
            };
            assert.equal(false, contactsTests.changeContact(contactToMod));
        });
        it('modification contact existant', function () {
            var contactToMod = {
                ident: 1,
                name: 'bonjourconnard',
                tel:'01',
                getIdent: function () {return this.ident}
            };
            assert.equal(true, contactsTests.changeContact(contactToMod));
            assert.equal('bonjourconnard', contactsTests.tabContacts[contactsTests.tabContacts.indexOf(contactToMod)].name);
        });
    });
    describe('Test de récupération par l id', function () {
        before(function () {
            contactsTests.tabContacts = [
                {
                    ident: 1,
                    name: 'klhsdfj',
                    tel:'01',
                    getIdent: function () {return this.ident}
                }, {
                    ident: 2,
                    name: 'lkjhsdfkhd',
                    tel: '02',
                    getIdent: function () {return this.ident}
                }, {
                    ident: 3,
                    name: 'ldfjg',
                    tel: '03',
                    getIdent: function () {return this.ident}
                }
            ];
        });
        after(function () {
            contactsTests.tabContacts = [];
        });
        it('recup contact id non valide', function () {
            assert.equal(false, contactsTests.getContactById(4));
        });
        it('recup contact id valide', function () {
            assert.equal(1, contactsTests.getContactById(1).getIdent());
        });
    });
});