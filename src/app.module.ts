import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import configuration from '@src/config/config';
import { RoomsModule } from '@rooms/rooms.module';
import { Room } from './rooms/room.entity';

ConfigModule.forRoot({
  isGlobal: true,
});

const factory = (config: ConfigService) =>
  ({
    type: 'mysql',
    host: config.get<string>('database.host'),
    port: 3306,
    username: config.get<string>('database.user'),
    password: config.get<string>('database.password'),
    database: config.get<string>('database.database'),
    entities: [Room],
    synchronize: false,
    autoLoadEntities: true,
  } as TypeOrmModuleOptions);

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: factory,
      inject: [ConfigService],
    }),
    RoomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
