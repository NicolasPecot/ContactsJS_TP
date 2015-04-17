/**
 * Created by Shadow on 18/04/2015.
 */
/**
 * Server file
 */
/* global node, _ */

(function () {
    "use strict";

    // Dependances
    var express = require('express'),
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