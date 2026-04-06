import { Pet } from 'src/pets/entities/pet.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hospitalization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fechaIngreso: Date;

  @Column()
  fechaSalida: Date;

  @Column()
  dias: number;

  @Column()
  observaciones: string;

  @ManyToOne(() => Pet, (pet) => pet.hospitalizations, { nullable: false })
  pet: Pet;
}
