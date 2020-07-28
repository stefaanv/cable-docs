import { ConfigService } from '@nestjs/config';
import winston from 'winston';
import moment from 'moment';
import DailyRotateFile from 'winston-daily-rotate-file';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as tz from 'moment-timezone';

export async function WinstonConfigFactory(
  config: ConfigService,
): Promise<winston.LoggerOptions> {
  const appName = config.get<string>('logging.appName');
  const fileLogLevel = config.get<string>('logging.fileLevel');
  const consoleLoglevel = config.get<string>('logging.consoleLogLevel');
  const fileRotateFrequency = config.get<string>('logging.fileRotateFrequency');
  const logFolder = process.env.NODE_ENV.startsWith('dev')
    ? 'C:\\temp\\'
    : config.get<string>('logging.dirname');
  const filenamePattern = config.get<string>('logging.filenamePattern');
  const filenameDatePattern = config.get<string>('logging.filenameDatePattern');
  const consoleLogDatetimePattern = config.get<string>(
    'logging.consoleLogDatetimePattern',
  );
  const fileLogDatetimePattern = config.get<string>(
    'logging.fileLogDatetimePattern',
  );
  const maxFiles = config.get<number>('logging.maxFiles');

  const appendTimestamp = winston.format((info, opts) => {
    if (opts.tz)
      info.timestamp = moment()
        .tz(opts.tz)
        .format(opts.pattern);
    return info;
  });

  const myConFormat = winston.format.printf(
    ({ level, message, label, timestamp }) => {
      return `${timestamp} [${level}] ${label ? label : 'Nest'} : ${message}`;
    },
  );

  const myConsoleTransport = new winston.transports.Console({
    level: consoleLoglevel,
    handleExceptions: true,
    format: winston.format.combine(winston.format.colorize(), myConFormat),
  });

  const myFileTransport = new DailyRotateFile({
    frequency: fileRotateFrequency,
    datePattern: filenameDatePattern,
    filename: filenamePattern,
    dirname: logFolder,
    maxFiles,
    level: fileLogLevel,
    handleExceptions: true,
    utc: false,
    format: winston.format.combine(
      winston.format.timestamp(),
      appendTimestamp({
        tz: 'Europe/Brussels',
        pattern: fileLogDatetimePattern,
      }),
      winston.format.json(),
    ),
  });

  return {
    defaultMeta: { app: appName },
    format: appendTimestamp({
      tz: 'Europe/Brussels',
      pattern: consoleLogDatetimePattern,
    }),
    transports: [myConsoleTransport, myFileTransport],
  };
}
