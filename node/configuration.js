/**
 * Created by Shadow on 07/03/2015.
 */
(function () {

    var appName = 'Contacts',
        appPort = 9001,

        dbName = 'contacts',
        dbHost = 'localhost',
        dbPort = 5432; // Au pif

    exports.init = function () {
        console.log('#########################');
        console.log('# App : '  + appName);
        console.log('# Port : ' + appPort);
        console.log('#########################');
    };

    exports.appName = appName;
    exports.appPort = appPort;
    exports.dbName = dbName;
    exports.dbHost = dbHost;
    exports.dbPort = dbPort;
})();