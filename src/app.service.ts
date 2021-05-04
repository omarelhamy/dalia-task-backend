import { Injectable, ConflictException, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmailDto } from './dto/email.dto';
import { Email, EmailDocument } from './schemas/email.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Email.name) private emailModel: Model<EmailDocument>,
  ) {}

  async getAllEmails(): Promise<Email[]> {
    return (await this.emailModel.find()).reverse();
  }

  async createEmail(createEmailDto: CreateEmailDto) {
    try {
      const createdEmail = new this.emailModel(createEmailDto);
      await createdEmail.save();
      return createdEmail;
    } catch (error) {
      if(error.code == 11000)
        throw new ConflictException("email already exists");
      else 
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
