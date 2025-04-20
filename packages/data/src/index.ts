import { c } from "./contract";

import { contract as pastebin } from "./routes/pastebin";

export const contract = c.router({
  pastebin,
});