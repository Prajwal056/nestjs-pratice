import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

enum Environment {
  DEV = 'DEVELOPMENT',
  PROD = 'PRODUCTION',
  TEST = 'TEST',
  SANDBOX = 'SANDBOX',
}

class EnvironmentVariables {
  @IsNotEmpty({ message: 'NODE_ENV is required' })
  @IsEnum(Environment, {
    message:
      'NODE_ENV must be one of the following values: DEVELOPMENT, PRODUCTION, TEST, SANDBOX',
  })
  NODE_ENV: Environment;

  @IsNotEmpty({ message: 'PORT is required' })
  @IsNumber({}, { message: 'PORT must be a number' })
  PORT: number;

  @IsNotEmpty({ message: 'HTTP_TIMEOUT is required' })
  @IsNumber({}, { message: 'HTTP_TIMEOUT must be a number' })
  HTTP_TIMEOUT: number;

  @IsNotEmpty({ message: 'HTTP_MAX_REDIRECTS is required' })
  @IsNumber({}, { message: 'HTTP_MAX_REDIRECTS must be a number' })
  HTTP_MAX_REDIRECTS: number;

  @IsNotEmpty({ message: 'LOG_LEVELS is required' })
  LOG_LEVELS: Array<string>;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
