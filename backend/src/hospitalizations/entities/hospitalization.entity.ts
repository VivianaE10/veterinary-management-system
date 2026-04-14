import { Pet } from 'src/pets/entities/pet.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hospitalization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha_ingreso: Date;

  @Column()
  fecha_salida: Date;

  @Column()
  dias: number;

  @Column()
  observaciones: string;

  @ManyToOne(() => Pet, (pet) => pet.hospitalizations, { nullable: false })
  pet: Pet;
}
