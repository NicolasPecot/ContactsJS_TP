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
    Contacts.prototype.removeContact = function (contact) {
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

    Contacts.prototype.getContactById = function (id) {
        'use strict';
        var c;
        for (c in this.tabContacts) {
            if (this.tabContacts[c].ident === id) {
                return this.tabContacts[c];
            }
        }
        return false;
    };

    Contacts.prototype.getContacts = function () {
        return this.tabContacts;
    };

    module.exports = Contacts;
})();