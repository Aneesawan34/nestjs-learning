import { IsEmail, IsEnum, IsString, IsNotEmpty } from 'class-validator';

export type Role = 'ADMIN' | 'ENGINEER' | 'INTERN';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(['ADMIN', 'ENGINEER', 'INTERN'], {
    message: 'Valid Role Required',
  })
  role: Role;
}
