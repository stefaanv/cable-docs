export default (): any => ({
  app: {
    port: parseInt(process.env.PORT) || 3000,
  },
  database: {
    host: process.env.DATABASE_HOST,
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'cabling',
  },
  docs: {
    title: 'Cabling Documentation',
    description: 'API for the cabling application',
    version: '1.0',
    tag: 'cabling',
    apiUrl: 'api',
  },
  logging: {
    appName: 'rsa-usr-mgnt',
    fileLevel: 'info',
    consoleLogLevel: 'debug',
    fileRotateFrequency: '24h',
    dirname: '/usr/bruyland/logs',
    filenamePattern: 'log-%DATE%.log',
    filenameDatePattern: 'YYYY-MM-DD',
    consoleLogDatetimePattern: 'D/M HH:mm:ss',
    fileLogDatetimePattern: 'YYYY/MM/DD HH:mm:ss',
    maxFiles: 20,
    handleExceptions: false,
    auditFile: 'logs',
  },
});
