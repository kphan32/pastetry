import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// Only instantiate the Prisma client on the server-side.
if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}

export default prisma;
