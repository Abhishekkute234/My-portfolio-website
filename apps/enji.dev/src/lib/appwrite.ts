import { Client, Account } from 'appwrite';

// Strip surrounding quotes (in case env vars are quoted) and whitespace
// This ensures compatibility between local .env and Vercel environment variables
const endpoint = (process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1')
  .replace(/^\"|\"$/g, '')
  .trim();

const projectId = (process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '')
  .replace(/^\"|\"$/g, '')
  .trim();

if (!projectId) {
  console.warn('[Appwrite] NEXT_PUBLIC_APPWRITE_PROJECT_ID is not set. Auth will not work.');
}

const client = new Client();
client
  .setEndpoint(endpoint)
  .setProject(projectId);

export const account = new Account(client);
export { client };
