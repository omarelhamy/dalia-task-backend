import { IsEmail, IsNotEmpty, isString } from "class-validator";

export class CreateEmailDto {
    
    @IsEmail()
    @IsNotEmpty()
    email: string
}