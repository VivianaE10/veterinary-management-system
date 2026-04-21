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
    try {
      const user = await this.usersService.findByCorreo(correo);

      if (!user) {
        console.log('NO USER');
        throw new UnauthorizedException('Usuario no existe');
      }

      const isMatch = await bcrypt.compare(contraseña, user.contraseña);
      console.log('MATCH:', isMatch);

      if (!isMatch) {
        console.log('PASSWORD INCORRECTA');
        throw new UnauthorizedException('Contraseña incorrecta');
      }

      const payload = { sub: user.id, correo: user.correo };

      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      console.error('ERROR REAL 👉', error);
      throw error;
    }
  }
}
