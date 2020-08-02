import { ConfigService } from '@nestjs/config';
import { SequelizeModuleAsyncOptions } from '@nestjs/sequelize';

export const sequelizeConfig = (
  config: ConfigService,
): SequelizeModuleAsyncOptions =>
  ({
    dialect: 'mysql',
    host: config.get<string>('database.host'),
    port: 3306,
    username: config.get<string>('database.user'),
    password: config.get<string>('database.password'),
    database: config.get<string>('database.database'),
    models: [],
  } as SequelizeModuleAsyncOptions);
