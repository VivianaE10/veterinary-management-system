import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //me dice con que entidades va a trabajar el modulo
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
