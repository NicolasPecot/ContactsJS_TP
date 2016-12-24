/**
 * Server file
 */
/* global node, _ */

(function () {
    'use strict';

    // Dependances
    var Hapi = require('hapi'),
        fs = require('fs'),
        configuration = require('./configuration/configuration'),
        contacts,
        server;

    if (configuration.appHost) {
        server = new Hapi().Server(configuration.appHost, configuration.appPort);
    } else {
        server = new Hapi().Server(configuration.appPort);
    }
})();