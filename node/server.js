/**
 * Created by Shadow on 02/03/2015.
 */
(function () {
    'use strict';

    var express = require('express'),
        contact = require('./contact'),
        contacts = require('./contacts'),
        configuration = require('./configuration'),
        app = express(),
        server;

    server = app.listen(configuration.appPort, function () {});
    configuration.init();

    app.use(express.static('../public'));


    app.get('/', function (req, res) {
        res.status(200).send('Helloworld !');
    });
    app.get('/contacts', contacts.getContacts());
})();

