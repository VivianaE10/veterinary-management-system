import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Rol {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  cedula: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  contraseña: string;

  @Column({
    type: 'enum',
    enum: Rol,
    default: Rol.USER,
  })
  rol: Rol;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha_creacion: Date;
}
