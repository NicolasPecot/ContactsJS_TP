/**
 * Created by Shadow on 07/03/2015.
 */
(function () {
    var mongoose = require('mongoose'),
        db,
        schema,
        dbContact;

    exports.connection = function (connexionString) {
        mongoose.connect(connexionString); //'mongodb://localhost/Contacts'
        schema = new mongoose.Schema({
            _id: Number,
            nom: String,
            prenom: String,
            tel: String,
            mail: String,
            birthdate: {type: Date, default: Date.now}
        });
        dbContact = mongoose.model('dbContact', schema);
    };

    exports.insertContact = function (contact, callback){

    };

    exports.getContacts = function (callback) {
        db.Contacts.find(callback);
    }
})();