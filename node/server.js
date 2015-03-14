/**
 * Created by Shadow on 02/03/2015.
 */
(function () {
    'use strict';

    var express = require('express'),
        winston = require('winston'),
        contact = require('./model/contact'),
        contacts = require('./model/contacts'),
        configuration = require('./configuration'),
        logger = require('./configuration_log').logger,
        routes = require('./routes'),
        app = express(),
        server;

    server = app.listen(configuration.appPort, function () {});
    configuration.init();

    app.use(express.static('../public'));

    app.route('/contacts').get(routes.getContacts);

    app.route('/getContactById').get(routes.getContactById);

    app.route('/addcontact').get(routes.addContact);
})();

