import { IsEmail, IsEnum, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';
import { Rol } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  nombre?: string;

  @IsOptional()
  cedula?: string;

  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  @MinLength(6)
  contraseña?: string;

  @IsOptional()
  @IsEnum(Rol)
  rol?: Rol;
}
