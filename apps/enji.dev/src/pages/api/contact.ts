import { z } from 'zod';
import { prisma } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Client, Account } from 'appwrite';

const contactSchema = z.object({
  message: z.string().min(1, 'Message is required').max(2000),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Unauthorized. Please sign in.' });
    }
    const jwt = authHeader.split(' ')[1];

    const { message } = contactSchema.parse(req.body);

    const endpoint = (process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1').replace(/^"|"$/g, '').trim();
    const projectId = (process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '').replace(/^"|"$/g, '').trim();

    const client = new Client();
    client
      .setEndpoint(endpoint)
      .setProject(projectId);
    client.setJWT(jwt);

    const account = new Account(client);
    const appwriteUser = await account.get();
    
    const email = appwriteUser.email;
    const name = appwriteUser.name || email.split('@')[0];

    if (!email) {
      return res.status(401).json({ success: false, message: 'Invalid session/user email.' });
    }

    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Message saved successfully!',
      data: {
        id: newMessage.id,
        createdAt: newMessage.createdAt,
      },
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors,
      });
    }

    console.error('Contact API Error:', error);

    const errObj = error as any;
    if (errObj.code === 401 || errObj.status === 401) {
      return res.status(401).json({
        success: false,
        message: `Session invalid or expired: ${error.message || error}`,
      });
    }

    return res.status(500).json({
      success: false,
      message: `Failed to save message: ${error.message || error}`,
    });
  }
}
