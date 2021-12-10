import * as express from "express";

/**
 *  Import Application Sub-Routers
 */

import ExampleSearchRouter, { exampleSearchHandlers } from "./ExampleSearch";

/**
 * Aggregate of all Application Sub-Routers
 */

const RouterAggregate = express.Router();

RouterAggregate.use("/search", ExampleSearchRouter);

export default RouterAggregate;
export { exampleSearchHandlers };
