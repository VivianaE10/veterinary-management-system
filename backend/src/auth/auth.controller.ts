import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: { correo: string; contraseña: string }) {
    return this.authService.login(body.correo, body.contraseña);
  }
}
