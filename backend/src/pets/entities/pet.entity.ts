import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Consultation } from 'src/consultations/entities/consultation.entity';
import { Hospitalization } from 'src/hospitalizations/entities/hospitalization.entity';
import { Document } from 'src/documents/entities/document.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @Column()
  especie: string;

  @Column()
  raza: string;

  @Column()
  foto: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha_creacion: Date;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  usuario: User;

  @OneToMany(() => Consultation, (consultation) => consultation.pet)
  consultations: Consultation[];

  @OneToMany(() => Hospitalization, (hospitalization) => hospitalization.pet)
  hospitalizations: Hospitalization[];

  @OneToMany(() => Document, (document) => document.pet)
  documents: Document[];
}

// nullable: false cada mascota debe estar asociada a un usuario, no puede existir sin dueño.
