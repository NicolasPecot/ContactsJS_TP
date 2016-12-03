/**
 * Server file
 */
/* global node, _ */

(function () {
    'use strict';

    // Dependances
    var hapi = require('hapi'),
        fs = require('fs'),
        app = express(),
        configuration = require('./configuration/configuration'),
        contacts,
        server;

    if (configuration.appHost) {
        server = app.listen(configuration.appPort, configuration.appHost);
    } else {
        server = app.listen(configuration.appPort);
    }
})();