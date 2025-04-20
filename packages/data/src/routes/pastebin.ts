import { z } from "zod";
import { c } from "../contract";

import { PastebinCreateInputSchema, PastebinWithRelationsSchema } from '@paste-it/db/zod'

export const contract = c.router({
  createPastebin: {
    method: "POST",
    path: "/pastebin",
    responses: {
      201: PastebinCreateInputSchema,
    },
    body: PastebinCreateInputSchema,
    summary: "Create a pastebin",
  },
  getPastebin: {
    method: "GET",
    path: `/pastebin/:id`,
    responses: {
      200: PastebinWithRelationsSchema.nullable(),
    },
    summary: "Get a pastebin by id",
  },
  getPastebinList: {
    method: "GET",
    path: `/pastebin/list`,
    responses: {
      200: z.array(PastebinWithRelationsSchema),
    },
    summary: "Get pastebin list",
  },
});