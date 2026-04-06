import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])], //me dice con que entidades va a trabajar el modulo
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
