import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateEmailDto } from './dto/email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllEmails() {
    return this.appService.getAllEmails();
  }
  
  @Post()
  createEmail(@Body(ValidationPipe) creatEmailDto: CreateEmailDto) {
    return this.appService.createEmail(creatEmailDto);
  }
}
