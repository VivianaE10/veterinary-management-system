import { AllExceptionsFilter } from './common/errors/exceptions-errors';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //el nombre de la función es bootstrap es común en NestJS para iniciar la aplicación y no se refiere a los estilos de diseño web
  const app = await NestFactory.create(AppModule);

  // Configuración global de pipes para validación de datos dtos
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuración global de filtros para manejo de excepciones de estados de error
  app.useGlobalFilters(new AllExceptionsFilter()); // Agrega el filtro de excepciones globalmente

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
