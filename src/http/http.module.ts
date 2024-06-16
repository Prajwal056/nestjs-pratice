import { Module } from '@nestjs/common';
import { HttpController } from './http.controller';
import { HttpDummyService } from './http.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        timeout: configService.get('HTTP_TIMEOUT'),
        maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [HttpController],
  providers: [HttpDummyService],
})
export class HttpDummyModule {}
