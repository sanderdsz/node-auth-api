import express from "express";
import {githubAuthorizationController} from "../controllers/githubAuthorization.controller";
import {githubTokenController} from "../controllers/githubToken.controller";

const sessionRouter = express.Router();

sessionRouter.get("/authorization/github", githubAuthorizationController);
sessionRouter.get("/oauth/github", githubTokenController);

export { sessionRouter };
