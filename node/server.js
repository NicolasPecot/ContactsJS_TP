/**
 * Created by Shadow on 02/03/2015.
 */
(function () {
    'use strict';

    var express = require('express'),
        contact = require('./Contact'),
        contacts = require('./Contacts'),
        app = express(),
        server;

    server = app.listen(9001, function () {});

    app.use(express.static('../public'));

    app.get('/', function (req, res) {
        res.status(200).send('Helloworld !');
    });
})();

