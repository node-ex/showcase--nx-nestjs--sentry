import { SentryUtils } from './sentry.utils';

// console.log("process.env['SENTRY_DSN']", process.env['SENTRY_DSN']);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
SentryUtils.initialize(process.env['SENTRY_DSN']!);
