// Este archivo define un filtro de excepciones personalizado para manejar errores específicos en la aplicación NestJS. El filtro captura todas las excepciones no manejadas y verifica si el error es un error de entrada duplicada de MySQL (código 'ER_DUP_ENTRY'). Si es así, devuelve una respuesta con un estado 409 (conflicto) y un mensaje específico. Para cualquier otro tipo de error, devuelve una respuesta con un estado 500 (error interno del servidor) y un mensaje genérico. Este filtro se utiliza globalmente en la aplicación para garantizar que todos los errores sean manejados de manera consistente.

import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common'; //utilidades de nestjs para crear filtros personalizados
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    //  ERROR DE DUPLICADOS DE DATOS

    if (
      typeof exception === 'object' &&
      exception !== null &&
      'code' in exception &&
      (exception as any).code === 'ER_DUP_ENTRY' // Verifica si el error es un error de entrada duplicada de MySQL
    ) {
      return response.status(409).json({
        statusCode: 409,
        message: 'Ya existe un usuario con ese correo o cédula',
      });
    }

    // OTROS ERRORES
    return response.status(500).json({
      statusCode: 500,
      message: 'Error interno del servidor',
    });
  }
}
