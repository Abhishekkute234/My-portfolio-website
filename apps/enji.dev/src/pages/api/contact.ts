import { z } from 'zod';
import { prisma } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionUser } from '@/lib/auth';

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
    // Verify session via httpOnly cookie (JWT)
    const sessionUser = getSessionUser(req);
    if (!sessionUser) {
      return res.status(401).json({ success: false, message: 'Unauthorized. Please sign in.' });
    }

    const { message } = contactSchema.parse(req.body);

    const email = sessionUser.email;
    const name = sessionUser.name || email.split('@')[0];

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

    return res.status(500).json({
      success: false,
      message: `Failed to save message: ${error.message || error}`,
    });
  }
}
