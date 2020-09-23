import express from 'express';
import bodyParser from 'body-parser';
import { createLogger } from './utils/logger';

const logger = createLogger('Root');

(async () => {
  const app = express();
  const port = process.env.PORT || 8080; // default port to listen

  app.use(bodyParser.json());

  // Root URI call
  app.get('/', async (req, res) => {
    logger.info('connected with browser');
    res.status(200).send('Hello ANT');
  });

  // Start the Server
  app.listen(port, () => {
    logger.info(`server running http://localhost:${port}`);
    logger.info(`press CTRL+C to stop server`);
  });
})();
