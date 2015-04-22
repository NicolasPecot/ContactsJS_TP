/**
 * Created by Shadow on 22/04/2015.
 */
(function () {

    'use strict';

    var logger = require('../configuration/configuration_log').logger,
        moment = require('moment'),
        dao = require('../dao/dao');

    /**
     * Creates a new Contact.
     * @param _id : id from database
     * @param lastname : lastname of the contact (String)
     * @param firstname : firstnameof the contact (String)
     * @param tel : telephone number of the contact (String)
     * @param email : email of the contact (String)
     * @param birthdate : birthdate of the contact (String)
     * @constructor
     */
    var Contact = function (_id, lastname, firstname, tel, email, birthdate) {
        logger.debug("[contact.js] Create new Contact.");
        this._id = _id || '';
        this.lastname = lastname || '';
        this.firstname = firstname || '';
        this.tel = tel || '';
        this.email = email || '';
        this.birthdate = moment(birthdate, "DD-MM-YYYY") || moment();
    };

    Contact.prototype.constructor = Contact;

    /**
     * Returns the contact's lastname
     * @returns {lastname|string|*}
     */
    Contact.prototype.getLastname = function () {
        return this.lastname;
    };

    /**
     * Returns the contact's firstname
     * @returns {firstnameof|string|*}
     */
    Contact.prototype.getFirstname = function () {
        return this.firstname;
    };

    /**
     * Returns the contact's telephone number
     * @returns {telephone|string|*}
     */
    Contact.prototype.getTel = function () {
        return this.tel;
    };

    /**
     * Returns the contact's email
     * @returns {email|string|*}
     */
    Contact.prototype.getEmail = function () {
        return this.email;
    };

    /**
     * Returns the contact's birthdate
     * @returns {birthdate|moment|*}
     */
    Contact.prototype.getBirthdate = function () {
        return this.birthdate.clone();
    };

    /**
     * Sets the contact's lastname
     * @param newLastname {string} : contact's lastname
     * @returns {*} : lastname length or -1 if null or undefined
     */
    Contact.prototype.setLastname = function (newLastname) {
        if (!newLastname) {
            return -1;
        }
        this.lastname = newLastname;
        return this.lastname.length;
    };

    /**
     * Sets the contact's firstname
     * @param newFirstname {string} : contact's firstname
     * @returns {*} : firstname length or -1 if null or undefined
     */
    Contact.prototype.setFirstname = function (newFirstname) {
        if (!newFirstname) {
            return -1;
        }
        this.firstname = newFirstname;
        return this.firstname.length;
    };

    /**
     * Sets the contact's telephone number. Uses a regex to verify if the number is correct.
     * @param newTel {string} : contact's telephone number
     * @returns {*} : tel length or -1 if null/undefined or if length != 10 or it does not have a tel number format
     */
    Contact.prototype.setTel = function (newTel) {
        var regPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        if (!newTel || tel.length !== 10 || !tel.match(regPhone)) {
            return -1;
        }
        this.tel = newTel;
        return this.tel.length;
    };

    /**
     * Sets the contact's email address. Uses a regex to verify if the address is correct.
     * @param newEmail {string} : contact's email address
     * @returns {*} : email length or -1 if null/undefined or if it does not have a email address format
     */
    Contact.prototype.setEmail = function (newEmail) {
        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
        if (!newEmail || !reg.test(email)) {
            return -1;
        }
        this.email = newEmail;
        return this.email.length;
    };

    /**
     * Sets the contact's birthdate.
     * @param newBirthdate {string} : contact's new birthdate
     * @returns {*} : difference in milliseconds between now and the birthdate, or -1 if null/undefined
     */
    Contact.prototype.setBirthdate = function (newBirthdate) {
        if (!newBirthdate) {
            return -1;
        }
        this.birthdate = moment(newBirthdate);
        return moment().diff(this.birthdate);
    };

    module.exports = Contact;
})();
