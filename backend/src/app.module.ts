import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { HospitalizationsModule } from './hospitalizations/hospitalizations.module';
import { DocumentsModule } from './documents/documents.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //para cargar el .env global
    ConfigModule.forRoot({ isGlobal: true }), // me permite activar el .env de manera global
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Carga automáticamente las entidades
      synchronize: false, // Sincroniza la base de datos con las entidades (no recomendado para producción)
    }),
    UsersModule,
    PetsModule,
    ConsultationsModule,
    HospitalizationsModule,
    DocumentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
