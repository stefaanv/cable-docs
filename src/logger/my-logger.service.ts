import { Logger } from '@nestjs/common';

export class MyLogger extends Logger {
  warn(message: string, context?: string): void {
    super.warn(message, context);
  }
  log(message: string, context?: string): void {
    super.log(message, context);
  }
}
