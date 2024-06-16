import { ConsoleLogger, Injectable } from '@nestjs/common';

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  LOG = 'log',
  DEBUG = 'debug',
  VERBOSE = 'verbose',
}

@Injectable()
export class MyCustomLogger extends ConsoleLogger {
  private activeLogLevels: LogLevel[] = [
    LogLevel.ERROR,
    LogLevel.WARN,
    LogLevel.LOG,
    LogLevel.DEBUG,
    LogLevel.VERBOSE,
  ];

  constructor(context?: string) {
    super(context);
  }

  setActiveLogLevels(levels: LogLevel[]) {
    this.activeLogLevels = levels;
  }

  log(message: any, context?: string) {
    if (this.activeLogLevels.includes(LogLevel.LOG)) {
      super.log(message, context);
    }
  }

  error(message: any, trace?: string, context?: string) {
    if (this.activeLogLevels.includes(LogLevel.ERROR)) {
      super.error(message, trace, context);
    }
  }

  warn(message: any, context?: string) {
    if (this.activeLogLevels.includes(LogLevel.WARN)) {
      super.warn(message, context);
    }
  }

  debug(message: any, context?: string) {
    if (this.activeLogLevels.includes(LogLevel.DEBUG)) {
      super.debug(message, context);
    }
  }

  verbose(message: any, context?: string) {
    if (this.activeLogLevels.includes(LogLevel.VERBOSE)) {
      super.verbose(message, context);
    }
  }
}
