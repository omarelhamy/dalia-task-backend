import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Email, EmailSchema } from './schemas/email.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dalia:Kf8KuK7uEiZWAkh2@dalia1.6njxr.mongodb.net/dalia_task?retryWrites=true&w=majority',
      { useCreateIndex: true },
    ),
    MongooseModule.forFeature([{ name: Email.name, schema: EmailSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
