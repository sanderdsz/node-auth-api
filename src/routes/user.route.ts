import express from "express";
import { githubUserHandler } from "../controllers/github.controller";

const userRouter = express.Router();

userRouter.get("/github", githubUserHandler);

export { userRouter };