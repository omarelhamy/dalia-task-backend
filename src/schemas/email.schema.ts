
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmailDocument = Email & Document;

@Schema({
    timestamps: true
})
export class Email {
  @Prop({
    unique: true,
    required: true,
  })
  email: string;
}

export const EmailSchema = SchemaFactory.createForClass(Email);