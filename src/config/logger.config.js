import winston from 'winston';
// import winston from 'winston/lib/winston/config';

const enumerateErrorFormat = winston.format((info) => {
    if (info instanceof Error) {
        Object.assign(info, { message: info.stack });
    }

    return info;
});

const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'developpment' ? 'debug' : 'info',
    format: winston.format.combine(
        enumerateErrorFormat(),
        process.env.NODE_ENV === 'developpment' ? winston.format.colorize() : winston.format.uncolorize(),
        winston.format.splat(),
        winston.format.printf(({ level, message}) => `${level}: ${message}`)
    ),
    transports: [
        new winston.transports.Console({
            stderrLevels: ['error']
        })
    ]
});

export default logger;
// module.exports = logger;

// To  be used as Logger.info(message) or Logger.error(error)
// logger.error('Hello from the error');