import express from "express";
import { githubAuthorizationController } from "../controllers/v1/github/githubAuthorization.controller";
import { githubTokenController } from "../controllers/v1/github/githubToken.controller";
import { googleAuthorizationController } from "../controllers/v1/google/googleAuthorization.controller";
import { googleTokenController } from "../controllers/v1/google/googleToken.controller";
import { accessTokenController } from "../controllers/v1/accessToken.controller";

const sessionRouter = express.Router();

sessionRouter.get("/authorization/github", githubAuthorizationController);
sessionRouter.get("/oauth/github", githubTokenController);
sessionRouter.get("/authorization/google", googleAuthorizationController);
sessionRouter.get("/oauth/google", googleTokenController);
sessionRouter.get("/oauth/tokeninfo", accessTokenController);

export { sessionRouter };
