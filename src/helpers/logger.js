const winston = require('winston');

const config = require('../config');

const transportsConfig = [];

if (config.nodeEnv === config.nodeEnvTypes.development) {
    transportsConfig.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
            )
        })
    );
} else {
    transportsConfig.push(
        new winston.transports.File({
            filename: 'process.log',
            format: winston.format.json()
        })
    );
}

const logger = winston.createLogger({
    level: config.loggerLevel,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-DD-MM HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    transports: transportsConfig
});

module.exports = logger;
