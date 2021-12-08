/**
 * ExampleSearch Router
 */

import express from "express";
import { exampleSearchAll, exampleSearchBySearchTerm } from "./handlers";
const ExampleSearchRouter = express.Router();

/**
 * /api/search
 * returns all results
 */

ExampleSearchRouter.get("/", async (_, res) => {
  const responseObject = await exampleSearchAll();
  res.json(await responseObject);
});

/**
 * /api/search/:searchTerm
 * returns all results matching searchTerm
 */

ExampleSearchRouter.get("/:searchTerm", async (req, res) => {
  const responseObject = await exampleSearchBySearchTerm(req.params);
  res.json(await responseObject);
});

export default ExampleSearchRouter;
