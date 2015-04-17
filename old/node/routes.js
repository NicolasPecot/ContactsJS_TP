/**
 * Created by Shadow on 12/03/2015.
 */
(function () {
    var contact = require('./model/contact'),
        contacts = require('./model/contacts');

    exports.getContacts = function (req, res) {
        var getContactsCallback = function (err, data) {
            return err ? res.status(500).send(err) : res.status(200).send(data);
        };
        contacts.getContacts(getContactsCallback);
    };

    exports.getContactById = function (req, res) {
        var getContactByIdCallback = function (err, data) {
            return err ? res.status(500).send(err) : res.status(200).send(data);
        };
        contacts.getContactById(req.query.contactId, getContactByIdCallback);

    };

    exports.deleteContact = function (req, res) {
        var deleteContactCallback = function (err, data) {
                return err ? res.status(500).send(err) : res.status(200).send(data);
            },
            getContactCallback = function (err, data) {
                return err ? res.status(500).send(err) : contacts.removeContact(data, deleteContactCallback());
            };
        contacts.getContactById(req.query.contactId, getContactCallback);
    };

    exports.addcontact = function (req, res) {
        var addContactCallback = function (err, data) {
            return err ? res.status(500).send(err) : res.status(200).send(data);
        };
        contacts.addContact(req.query.contact, addContactCallback);
    };
})();