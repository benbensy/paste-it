import { z } from 'zod';
import { c } from '../contract';

const PastebinSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const contract = c.router({
  createPastebin: {
    method: 'POST',
    path: '/pastebin',
    responses: {
      201: PastebinSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
    summary: 'Create a pastebin',
  },
  getPastebin: {
    method: 'GET',
    path: `/pastebin/:id`,
    responses: {
      200: PastebinSchema.nullable(),
    },
    summary: 'Get a pastebin by id',
  },
});