import express from "express";
import { githubUserDetailsController } from "../controllers/v1/github/githubUserDetails.controller";
import { googleUserDetailsController } from "../controllers/v1/google/googleUserDetails.controller";

const userRouter = express.Router();

userRouter.get("/details/github", githubUserDetailsController);
userRouter.get("/details/google", googleUserDetailsController);

export { userRouter };
