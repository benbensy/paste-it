import Fastify from "fastify";
import { initServer } from "@ts-rest/fastify";
import { fastifyStatic } from "@fastify/static";

import { contract } from "@paste-it/data";
import { join } from "node:path";
import { pastebin } from "./routes/pastebin";

const dirname = import.meta.dirname;

const app = Fastify({
  logger: {
    transport: {
        target: '@fastify/one-line-logger'
    }
  },
});

app.register(fastifyStatic, {
  root: join(dirname, "../static"),
});

const s = initServer();

s.registerRouter(
  contract,
  {
    pastebin,
  },
  app,
  {
    logInitialization: true,
  }
);

const start = async () => {
  try {
    await app.listen({ port: 4000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
