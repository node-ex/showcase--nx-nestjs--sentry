import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { SentryModule } from '@sentry/nestjs/setup';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalCatchAllExceptionFilter } from './global-catch-all.exception-filter';

@Module({
  imports: [
    /* Must be the first module in the imports array */
    SentryModule.forRoot(),
    ConfigModule.forRoot({
      // No need to import in other modules
      isGlobal: true,
      expandVariables: true,
      // cache: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalCatchAllExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule {}
