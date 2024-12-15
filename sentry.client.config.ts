import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://cb2a7a98f483aea965cba9e5567b669e@o4508472962973696.ingest.us.sentry.io/4508472964677632",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
