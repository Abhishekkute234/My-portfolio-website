import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionUser } from '@/lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const user = getSessionUser(req);
  if (!user) {
    return res.status(401).json({ success: false, message: 'Not authenticated.' });
  }

  return res.status(200).json({
    success: true,
    user: { id: user.id, email: user.email, name: user.name },
  });
}
