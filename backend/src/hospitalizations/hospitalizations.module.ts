import { Module } from '@nestjs/common';
import { HospitalizationsService } from './hospitalizations.service';
import { HospitalizationsController } from './hospitalizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospitalization } from './entities/hospitalization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hospitalization])],
  controllers: [HospitalizationsController],
  providers: [HospitalizationsService],
})
export class HospitalizationsModule {}
