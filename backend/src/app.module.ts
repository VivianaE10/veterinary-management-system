import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { HospitalizationsModule } from './hospitalizations/hospitalizations.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sistema_gestion_veterinaria',
      autoLoadEntities: true, // Carga automáticamente las entidades
      synchronize: true,
    }),
    UsersModule,
    PetsModule,
    ConsultationsModule,
    HospitalizationsModule,
    DocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
