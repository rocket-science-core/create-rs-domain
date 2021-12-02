/**
 * Best Practices For Express Server
 * https://expressjs.com/en/advanced/best-practice-performance.html
 */

import compression from "compression";
import morgan from "morgan";
import express from "express";

import RouterAggregate from './routes'

const app = express();

/**
 * Middleware
 */

app.use(compression());
app.use(morgan("tiny"));

/**
 * Consume Aggregated Router
 */

app.use('/api', RouterAggregate)

/**
 * Start the application
 */

const port = process.env.SERVER_PORT || 8000;

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

export * from './routes';