import { Controller, Get } from '@nestjs/common';
import { AppService } from '@src/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('serving helloworld');
    return this.appService.getHello();
  }
}
