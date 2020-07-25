import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '@src/config/config';

ConfigModule.forRoot({
  isGlobal: true,
});
@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
