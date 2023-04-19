import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getIndex(): Record<any, any> {
    return {};
  }
}
