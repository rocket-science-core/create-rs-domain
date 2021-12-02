import * as express from "express";

/**
 *  Import Application Sub-Routers
 */

import ExampleSearchRouter from "./ExampleSearch";
import ExampleAuthRouter from "./ExampleAuth";

/**
 * Aggregate of all Application Sub-Routers
 */

const RouterAggregate = express.Router();

RouterAggregate.use("/search", ExampleSearchRouter);
RouterAggregate.use("/auth", ExampleAuthRouter);

export default RouterAggregate;
