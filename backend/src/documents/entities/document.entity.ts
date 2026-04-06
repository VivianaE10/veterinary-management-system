import { Pet } from 'src/pets/entities/pet.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum TipoDocumento {
  RADIOGRAFIA = 'RADIOGRAFIA',
  FORMULA = 'FORMULA',
  EXAMEN = 'EXAMEN',
}

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TipoDocumento,
  })
  tipo: TipoDocumento;

  @Column()
  archivo_url: string;

  @Column()
  fecha: Date;

  @Column()
  descripcion: string;

  @ManyToOne(() => Pet, (pet) => pet.documents, { nullable: false })
  pet: Pet;
}
