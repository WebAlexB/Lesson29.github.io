import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import {join} from "path";
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);


const server = fastify();

server.register(fastifyStatic, {
    root: join(__dirname, '../build')
});

server.listen({port: 2221})
    .then((address) => {
        console.log('Server started at ' + address);
    }).catch(err => {
    console.log('Error:', err);
});