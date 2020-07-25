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
});
