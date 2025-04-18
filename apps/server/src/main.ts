import Fastify from 'fastify';
import { initServer } from '@ts-rest/fastify';
import { fastifyStatic } from '@fastify/static'

import { contract } from '@paste-it/shared/data'
import { join } from 'node:path';

const dirname = import.meta.dirname;

const app = Fastify();

app.register(fastifyStatic, {
    root: join(dirname, '../static'),

})

const s = initServer();

const router = s.router(contract, {
    pastebin: {
        createPastebin: {
            async handler() {
                return {
                    status: 201,
                    body: {
                        id: "123",
                        title: "测试",
                        body: "body",
                    },
                };
            }
        },
        getPastebin: {
            async handler({ params }) {
                return {
                    status: 200,
                    body: {
                        id: params.id,
                        title: "测试",
                        body: "body",
                    }
                };
            },
        }
    }
});

app.register(s.plugin(router));

const start = async () => {
    try {
        await app.listen({ port: 4000 });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();