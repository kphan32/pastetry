import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";

// Main entry point for the paste API. Routes to other functions
// based on method requested.
const pasteAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      await pastePost(req, res);
      break;
    default:
      res.status(500).send(`Method ${req.method} not supported`);
  }
};

const pastePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pasteNanoId = nanoid();

    await new PrismaClient().paste.create({
      data: {
        content: req.body.content,
        nanoId: pasteNanoId,
      },
    });

    res.status(200).json({ redirect: `/${pasteNanoId}` });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default pasteAPI;
