import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config options go here
};

const sentryWebpackConfig = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  silent: true,
  org: "portfolio-so",
  project: "javascript-nextjs",
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  // Uncomment this if you want to route browser requests through a rewrite to circumvent ad-blockers:
  // tunnelRoute: "/monitoring",
  reactComponentAnnotation: {
    enabled: true,
  },
};

// Export the final config
export default withSentryConfig(nextConfig, sentryWebpackConfig);
