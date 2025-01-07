import Contact from "@/lib/models/Contact";
import { NextApiRequest, NextApiResponse } from "next";
import connect from "@/lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connect();

    // Handle POST requests for form submission
    if (req.method === "POST") {
      const { name, email, message } = req.body;

      // Ensure all fields are provided
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Create a new contact entry in the database
      const newContact = await Contact.create({ name, email, message });

      // Respond with success
      return res.status(200).json({ message: "Message sent successfully!", contact: newContact });

    }

    // Handle GET requests to retrieve previous contacts (if needed)
    else if (req.method === "GET") {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.status(200).json(contacts);
    }

    // If method is not POST or GET, respond with 405 Method Not Allowed
    return res.status(405).json({ message: "Method Not Allowed" });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
