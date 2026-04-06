import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pets/entities/pet.entity';

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  motivo: string;

  @Column()
  diagnostico: string;

  @Column()
  tratamiento: string;

  @Column()
  veterinario: string;

  @ManyToOne(() => Pet, (pet) => pet.consultations, { nullable: false })
  pet: Pet;
}
