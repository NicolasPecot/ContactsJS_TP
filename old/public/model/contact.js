'use strict';
function Contact() {
    /*Observable.call(this);*/
    this.ident = "";
    this.nom = "";
    this.prenom = "";
    this.tel = "";
    this.email = "";
    this.birthdate = "";
    this.img = "ressources/Minecraft-steve_12.png";
}
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
    var reg = new RegExp('^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$');
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

Contact.prototype.setImg = function (imgSrc) {
    this.img = imgSrc;
};
Contact.prototype.getImg = function () {
    return this.img;
};