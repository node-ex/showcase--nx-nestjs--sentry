import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { SentryExceptionCaptured } from '@sentry/nestjs';
import * as Sentry from '@sentry/nestjs';

/**
 * Copy-pasted from:
 * https://docs.nestjs.com/exception-filters#catch-everything
 */
@Catch()
export class GlobalCatchAllExceptionFilter extends BaseExceptionFilter {
  @SentryExceptionCaptured()
  override catch(exception: unknown, host: ArgumentsHost): void {
    /* Use this if you want to send exceptions to Sentry manually */
    // Sentry.captureException(exception);
    super.catch(exception, host);
  }
}
