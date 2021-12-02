/**
 * ExampleSearch Router
 */

 import express from "express";
 import { exampleLogin, exampleLogout } from "./handlers";
 const ExampleAuthRouter = express.Router();

 /**
  * /api/login
  * returns all results
  */

  ExampleAuthRouter.get("/login", async (_, res) => {
   const responseObject = await exampleLogin();
   res.json(await responseObject);
 });

 /**
  * /api/logout
  * returns all results matching searchTerm
  */

  ExampleAuthRouter.get("/logout", async (req, res) => {
   const responseObject = await exampleLogout();
   res.json(await responseObject);
 });

 export default ExampleAuthRouter;
