import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { MyLogger } from '@log/my-logger.service';
import { ConfigService } from '@nestjs/config';
import { WinstonConfigFactory } from '@src/winston-config';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useFactory: WinstonConfigFactory,
      inject: [ConfigService],
    }),
  ],
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
