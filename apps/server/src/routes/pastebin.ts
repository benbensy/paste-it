import { contract } from "@paste-it/data";
import { RouterImplementation } from "@ts-rest/fastify";

import { prisma } from "@paste-it/db/client";

export const pastebin: RouterImplementation<(typeof contract)["pastebin"]> = {
  async createPastebin({ body }) {
    return {
      status: 201,
      body: await prisma.pastebin.create({
        data: {
          title: body.title,
          content: body.content,
        },
      }),
    };
  },
  async getPastebin({ params }) {
    return {
      status: 200,
      body: await prisma.pastebin.findFirst({
        include: {
          attachments: true,
        },
        where: {
          id: params.id,
        },
      }),
    };
  },
  async getPastebinList() {
    return {
      status: 200,
      body: await prisma.pastebin.findMany({
        include: {
          attachments: true,
        },
      }),
    };
  },
};
