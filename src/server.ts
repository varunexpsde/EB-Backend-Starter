import express from 'express';
import bodyParser from 'body-parser';
import { createLogger } from './utils/logger';

const logger = createLogger('Root');

(async () => {
  const app = express();
  const port = process.env.PORT || 8080; // default port to listen

  app.use(bodyParser.json());

  // CORS Should be restricted
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
    process.exit(1);
  });

  // Root URI call
  app.get('/', async (req, res) => {
    res.send('Hello ANT');
    logger.info('connected with browser');
  });

  // Start the Server
  app.listen(port, () => {
    logger.info(`server running http://localhost:${port}`);
    logger.info(`press CTRL+C to stop server`);
  });
})();
