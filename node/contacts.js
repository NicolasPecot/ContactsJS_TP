/**
 * Created by Shadow on 02/03/2015.
 */
(function () {

    var contact = require('./contact');

    var Contacts = function () {
        'use strict';
        this.tabContacts = [];
    };

    Contacts.prototype.constructor = Contacts;

    Contacts.prototype.addContact = function (contact) {
        'use strict';
        this.tabContacts.push(contact);
    };
    Contacts.prototype.removeContact = function (contact) {
        'use strict';
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
    };

    module.exports = Contacts;
})();