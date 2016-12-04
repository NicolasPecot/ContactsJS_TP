(function() {
    'use strict';

    var expect  = require('chai').expect;
    var Contact = require('../model/contact');

    var contactForTest;

    describe('Test Contact', function() {
        describe('Tests getters', function() {
            describe('Tests LastName', function() {
                it('Test lastname on empty init object', function() {
                    contactForTest = new Contact();
                    var lastname = contactForTest.getLastname();
                    expect(lastname).to.equal('');
                });
                it('Test lastname on defined init object', function() {
                    contactForTest = new Contact('', 'Dupond');
                    var lastname = contactForTest.getLastname();
                    expect(lastname).to.equal('Dupond');
                });
            });
        });
    });
})();