import express from "express";
import {githubUserDetailsController} from "../controllers/githubUserDetails.controller";

const userRouter = express.Router();

userRouter.get("/github", githubUserDetailsController);

export { userRouter };
