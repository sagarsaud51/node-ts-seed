import express, { Express } from 'express';
import cors from 'cors';
import pino from 'pino';
import { config } from '../config/config';
import { ServerContext } from './context';
import { router } from './modules/routes';
import bodyParser from 'body-parser';

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
export const logger = pino({
    level: config.environment === 'Development' ? 'trace' : 'info',
});

app.use((req, res, next) => {
    req.context = { logger } as ServerContext;
    next();
});

app.use(`/api/${config.version}`, router);

export default app;
