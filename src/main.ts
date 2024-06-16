import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MyCustomLogger, LogLevel } from './utils/my-custom-logger.service';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      // disableErrorMessages: true,
      whitelist: true,
      transform: true,
    }),
  );

  // app.useGlobalPipes(new ValidationPipe());

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const logger = new MyCustomLogger('AppContext');
  const configService: ConfigService = app.get(ConfigService);
  const PORT = configService.get('PORT');
  const logLevels = configService.get('LOG_LEVELS');

  const activeLevels = (logLevels?.split(',') as LogLevel[]) || [
    LogLevel.LOG,
    LogLevel.ERROR,
    LogLevel.WARN,
    LogLevel.DEBUG,
    LogLevel.VERBOSE,
  ];

  const config = new DocumentBuilder()
    .setTitle("Spotify Clone Api's")
    .setDescription('The Spotify Clone API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  logger.setActiveLogLevels(activeLevels);
  app.useLogger(logger);

  await app.listen(PORT);
}
bootstrap();
