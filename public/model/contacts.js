/*globals Observable,localStorage,Contact*/

function Contacts() {
    'use strict';
    this.tabContacts = [];
}

Contacts.prototype = Object.create(Observable.prototype);
Contacts.prototype.constructor = Contacts;

Contacts.prototype.addContact = function (contact) {
    'use strict';
    this.tabContacts.push(contact);
    this.notify();
};
Contacts.prototype.removeContact = function (contact) {
    'use strict';
    this.notify();
    return this.tabContacts.splice(this.tabContacts.indexOf(contact), 1);
};
Contacts.prototype.changeContact = function (contact) {
    'use strict';
    var c;
    for (c in this.tabContacts) {
        if (this.tabContacts[c].getIdent() === contact.getIdent()) {
            this.tabContacts[c] = contact;
        }
    }
    this.notify();
};
Contacts.prototype.saveLocalStorage = function () {
    'use strict';
    localStorage.clear();
    var jsonified, c;
    localStorage.setItem('taille', this.tabContacts.length);
    for (c in this.tabContacts) {
        jsonified = JSON.stringify(this.tabContacts[c]);
        localStorage.setItem("contact" + c, jsonified);
    }
};
Contacts.prototype.loadLocalStorage = function () {
    'use strict';
    var taille = localStorage.getItem('taille'),
        c,
        i,
        jsonified,
        contact;

    for (i = 0; i < taille; i++) {
        jsonified = localStorage.getItem('contact' + i);
        c = JSON.parse(jsonified);
        contact = new Contact();
        contact.ident = c.ident;
        contact.nom = c.nom;
        contact.prenom = c.prenom;
        contact.tel = c.tel;
        contact.email = c.email;
        contact.birthdate = c.birthdate;
        console.log(contact);
        this.addContact(contact);
    }
};
Contacts.prototype.getListContacts = function () {
    var successCallback, errorCallback;
    successCallback = function (data) {
        this.tabContacts = data;
    };
    errorCallback = function (err) {
        console.log(err);
    };
    getContacts(successCallback, errorCallback);
};