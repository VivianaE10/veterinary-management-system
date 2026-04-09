import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Rol } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsNotEmpty({ message: 'La cédula es obligatoria' })
  cedula: string;

  @IsEmail({}, { message: 'El correo no es valido' })
  correo: string;

  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  contraseña: string;

  @IsEnum(Rol, { message: 'El rol debe ser ADMIN o USER' })
  rol: Rol;
}
