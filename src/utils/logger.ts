import * as winston from 'winston';

/**
 * Create a logger instance to write log messages in JSON format.
 *
 * @param loggerName - a name of a logger that will be added to all messages
 */

const logFormat = winston.format.printf(
  (info) => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
);

export function createLogger(loggerName: string): winston.Logger {
  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.label({ label: loggerName }),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.metadata({
        fillExcept: ['message', 'level', 'timestamp', 'label'],
      })
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(logFormat),
      }),
    ],
  });
}
