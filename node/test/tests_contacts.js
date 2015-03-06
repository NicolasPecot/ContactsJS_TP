/**
 * Created by Shadow on 05/03/2015.
 */

var contact = require('../Contact.js'),
    assert = require('assert');

describe('Tests des fonctionnalités de Contacts', function () {
    'use strict';
    var contactTest = new contact();

    describe('Test de setIdent', function () {
        it('should be equal', function () {
            contactTest.setIdent('1');
            assert.equal('1', contactTest.ident);
            assert.notEqual('2', contactTest.ident);
        });
        it('should not be equal', function () {
            contactTest.setIdent('1');
            assert.notEqual('2', contactTest.ident);
        });
    });
    describe('Test de getIdent', function () {
        it('should be equal', function () {
            assert.equal('1', contactTest.getIdent());
        });
        it('should not be equal', function () {
            assert.notEqual('2', contactTest.getIdent());
        });
    });
    describe('Test de setEmail', function () {
        it('should be equal', function () {
            contactTest.setEmail('lolcat.truc@kaka.fr');
            assert.equal('lolcat.truc@kaka.fr', contactTest.email);
        });
        it('should not return false', function () {
            assert.notEqual(false, contactTest.setEmail('lolcat.truc@kaka.fr'));
        });
        it('should return false', function () {
            assert.equal(false, contactTest.setEmail('bonjour'));
        });
    });
});
