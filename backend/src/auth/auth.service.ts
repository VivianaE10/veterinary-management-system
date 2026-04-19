import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(correo: string, contraseña: string) {
    const user = await this.usersService.findByCorreo(correo);

    if (!user) {
      throw new UnauthorizedException('El usuario no existe');
    }

    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    console.log('MATCH:', isMatch);

    if (!isMatch) {
      throw new UnauthorizedException('Contaseña incorrecta');
    }
    console.log('SECRET:', process.env.JWT_SECRET);
    //payload es la informacion que guardo dentro del token
    const payload = { sub: user.id, correo: user.correo }; //sub significa sujeto y se utiliza para identificarlo a ese usuario por id y contraseña

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
