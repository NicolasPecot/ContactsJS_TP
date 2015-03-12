/**
 * Created by Shadow on 02/03/2015.
 */
(function () {
    'use strict';

    var express = require('express'),
        contact = require('./model/contact'),
        contacts = require('./model/contacts'),
        configuration = require('./configuration'),
        app = express(),
        server;

    server = app.listen(configuration.appPort, function () {});
    configuration.init();

    app.use(express.static('../public'));

    app.route('/contacts').get(function (req, res) {
        res.status(200).send(contacts.getContacts());
    });

    app.route('/getContactById/:idContact').get(contacts.getContactById);
})();

