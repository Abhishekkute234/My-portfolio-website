import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7b34ef561a1335d65d5485192a7040a6@o4508472962973696.ingest.us.sentry.io/4508504472354816",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});