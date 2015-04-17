/**
 * Created by Shadow on 18/04/2015.
 */
(function () {
    var winston = require('winston');

    exports.logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)({
                name: 'errors',
                level: 'error',
                filename: './logs/errors-logs.log'
            })
        ]
    });
})();