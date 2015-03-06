/**
 * Created by Shadow on 05/03/2015.
 */

var contact = require('../Contact.js'),
    assert = require('assert');

describe('Tests des fonctionnalités de Contact', function () {
    'use strict';
    var contactTest = new Contact();

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
        it('verif insertion email', function () {
            contactTest.setEmail('lolcat.truc@kaka.fr');
            assert.equal('lolcat.truc@kaka.fr', contactTest.email);
        });
        it('verif retour insert email', function () {
            assert.notEqual(false, contactTest.setEmail('lolcat.truc@kaka.fr'));
        });
        it('verif retour insert mail non conforme', function () {
            assert.equal(false, contactTest.setEmail('bonjour'));
        });
    });
    describe('Test de setTel', function () {
        it('verif insertion chaine', function () {
            contactTest.setTel('0102030405');
            assert.equal('0102030405', contactTest.tel);
        });
        it('verif retour insert correct', function () {
            assert.equal(true, contactTest.setTel('0102030406'));
        });
        it('retour insert chaine courte', function () {
            assert.equal(false, contactTest.setTel('0102030'));
        });
        it('retour insert chaine longue', function () {
            assert.equal(false, contactTest.setTel('010203040506'));
        });
        it('retour insert chaine w/ chars', function () {
            assert.equal(false, contactTest.setTel('ad02030405'));
        });
    });
});
