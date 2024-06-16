import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env.validation';
import { HttpDummyModule } from './http/http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: (() => {
        const defaultPath = '.env';
        const envPath = process.env.NODE_ENV
          ? `.env.${process.env.NODE_ENV.toLocaleLowerCase()}`
          : '';
        return [envPath, defaultPath].filter(Boolean);
      })(),
      validate,
    }),
    SongsModule,
    HttpDummyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
