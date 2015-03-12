/**
 * Created by Shadow on 02/03/2015.
 */
(function () {

    var contact = require('./contact');

    var Contacts = function (tabcontacts) {
        'use strict';
        this.tabContacts = tabcontacts || [];
    };

    Contacts.prototype.constructor = Contacts;

    Contacts.prototype.addContact = function (contact) {
        'use strict';
        this.tabContacts.push(contact);
        return this.tabContacts.length;
    };
    Contacts.prototype.removeContact = function (contact, callback) {
        'use strict';
        var i;
        if (this.tabContacts.indexOf(contact) !== -1) {
            return this.tabContacts.splice(this.tabContacts.indexOf(contact), 1);
        } else {
            for (i in this.tabContacts) {
                if (this.tabContacts[i].ident === contact.ident) {
                    return this.tabContacts.splice(i, 1);
                }
            }
            return false;
        }
    };
    Contacts.prototype.changeContact = function (contact) {
        'use strict';
        var c;
        for (c in this.tabContacts) {
            if (this.tabContacts[c].getIdent() === contact.getIdent()) {
                this.tabContacts[c] = contact;
                return true;
            }
        }
        return false;
    };

    Contacts.prototype.getContactById = function (id, callback) {
        'use strict';
        var c, result;
        for (c in this.tabContacts) {
            if (this.tabContacts[c].ident === id) {
                result = this.tabContacts[c];
            }
        }
        if (!result) {
            callback('Pas de contact correspondant', null);
        } else {
            callback(null, result);
        }
    };

    Contacts.prototype.getContacts = function (callback) {
        callback(this.tabContacts);
    };

    module.exports = Contacts;
})();