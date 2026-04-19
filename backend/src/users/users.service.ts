import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    //hashear las contraseñas
    const hashedPassword = await bcrypt.hash(createUserDto.contraseña, 10);

    //crear el usuario con la contaseña segura
    const user = this.usersRepository.create({
      ...createUserDto, //me tare tdodos los datos
      contraseña: hashedPassword, // remplaza la contaseña por la incriptada
    });
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find({
      relations: ['pets'],
    });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['pets'],
    });
  }

  findByCedula(cedula: string) {
    return this.usersRepository.findOne({
      where: { cedula },
      relations: ['pets'],
    });
  }

  findByCorreo(correo: string) {
    return this.usersRepository.findOne({
      where: { correo },
      relations: ['pets'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
