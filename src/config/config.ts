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
});
