import express from "express";
import { githubAuthorizationHandler, githubTokenHandler } from "../controllers/github.controller";

const sessionRouter = express.Router();

sessionRouter.get("/authorization/github", githubAuthorizationHandler);
sessionRouter.get("/oauth/github", githubTokenHandler);

export { sessionRouter };