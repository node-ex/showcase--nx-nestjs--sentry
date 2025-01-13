import * as Sentry from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

export class SentryUtils {
  static initialize(sentryDsn: string) {
    /**
     * Stack traces seem to work without additional setup, so the following
     * setup was skipped:
     * https://docs.sentry.io/platforms/javascript/guides/nestjs/#add-readable-stack-traces-to-errors
     */
    Sentry.init({
      dsn: sentryDsn,
      integrations: [
        /* Adds profiling integration */
        nodeProfilingIntegration(),
      ],
      /* Enables tracing */
      tracesSampleRate: 1.0,
      /* Value is relative to tracesSampleRate */
      profilesSampleRate: 1.0,
    });

    /*
     * Manually call startProfiler and stopProfiler
     * to profile the code in between
     */
    // Sentry.profiler.startProfiler();
  }
}
