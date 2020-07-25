import { Controller, Get } from '@nestjs/common';
import { AppService } from '@src/app.service';
import { ConfigService } from '@nestjs/config';

interface IDatabaseOptions {
  host: string;
  user: string;
  password: string;
  database: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private config: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log('serving helloworld');
    return this.appService.getHello();
  }

  @Get('db')
  getDbInfo(): IDatabaseOptions {
    const dbConfigOptions = this.config.get<IDatabaseOptions>('database');
    dbConfigOptions.password = '[removed]';
    return dbConfigOptions;
  }
}
