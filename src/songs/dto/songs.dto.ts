import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSongsDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
