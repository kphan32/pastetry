import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";

// Main entry point for the paste API. Routes to other functions
// based on method requested.
const pasteAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      await pasteGet(req, res);
      break;
    case "POST":
      await pastePost(req, res);
      break;
    default:
      res.status(500).send(`Method ${req.method} not supported`);
  }
};

const pasteGet = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pasteNanoId = req.query.id;

    const paste = await new PrismaClient().paste.findUnique({
      where: {
        nanoId: pasteNanoId,
      },
    });

    res.status(200).send(paste.content);
  } catch (error) {
    res.status(500).send(error);
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

    res.status(200).redirect(`/${pasteNanoId}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default pasteAPI;
