/**
 * Created by Shadow on 02/03/2015.
 */
/*global */
'use strict';
var Contact = function () {
    this.ident = "";
    this.nom = "";
    this.prenom = "";
    this.tel = "";
    this.email = "";
    this.birthdate = "";
};


//Contact.prototype = Object.create(Observable.prototype);
Contact.prototype.constructor = Contact;

Contact.prototype.getIdent = function () {
    return this.ident;
};
Contact.prototype.getNom = function () {
    return this.nom;
};
Contact.prototype.getPrenom = function () {
    return this.prenom;
};
Contact.prototype.getTel = function () {
    return this.tel;
};
Contact.prototype.getEmail = function () {
    return this.email;
};
Contact.prototype.getBirthdate = function () {
    return this.birthdate;
};
Contact.prototype.setIdent = function (ident) {
    this.ident = ident;
};
Contact.prototype.setNom = function (nom) {
    this.nom = nom;
};
Contact.prototype.setPrenom = function (prenom) {
    this.prenom = prenom;
};
Contact.prototype.setTel = function (tel) {
    var reg = new RegExp('[0-9]*');
    if (tel.length === 10 && reg.test(tel)) {
        this.tel = tel;
    }
};
Contact.prototype.setEmail = function (email) {
    var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
    if (reg.test(email)) {
        this.email = email;
    }
};
Contact.prototype.setBirthdate = function (birthdate) {
    this.birthdate = birthdate;
};

exports.Contact = Contact;