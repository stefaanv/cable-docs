import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configuration from '@src/config/config';
import { RoomsModule } from '@rooms/rooms.module';
import { LoggerModule } from '@src/logger/logger.module';
import { sequelizeConfig } from '@src/sequelize-config';

ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: sequelizeConfig,
      inject: [ConfigService],
    }),
    RoomsModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
