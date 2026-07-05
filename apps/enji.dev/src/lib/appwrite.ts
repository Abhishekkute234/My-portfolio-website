import { Client, Account } from 'appwrite';

const endpoint = (process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1').replace(/^"|"$/g, '').trim();
const projectId = (process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '').replace(/^"|"$/g, '').trim();

const client = new Client();
client
  .setEndpoint(endpoint)
  .setProject(projectId);

export const account = new Account(client);
export { client };
