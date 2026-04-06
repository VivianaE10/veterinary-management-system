import { Injectable } from '@nestjs/common';
import { CreateHospitalizationDto } from './dto/create-hospitalization.dto';
import { UpdateHospitalizationDto } from './dto/update-hospitalization.dto';

@Injectable()
export class HospitalizationsService {
  create(createHospitalizationDto: CreateHospitalizationDto) {
    return 'This action adds a new hospitalization';
  }

  findAll() {
    return `This action returns all hospitalizations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hospitalization`;
  }

  update(id: number, updateHospitalizationDto: UpdateHospitalizationDto) {
    return `This action updates a #${id} hospitalization`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospitalization`;
  }
}
