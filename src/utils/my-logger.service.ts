import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class MyLogger implements LoggerService {
  log(message: string) {
    // Implement your logging logic here
    console.log(`[Log] ${message}`);
  }

  error(message: string, trace: string) {
    // Implement your error logging logic here
    console.error(`[Error] ${message}`, trace);
  }

  warn(message: string) {
    // Implement your warning logging logic here
    console.warn(`[Warn] ${message}`);
  }

  debug(message: string) {
    // Implement your debug logging logic here
    console.debug(`[Debug] ${message}`);
  }

  verbose(message: string) {
    // Implement your verbose logging logic here
    console.log(`[Verbose] ${message}`);
  }
}
