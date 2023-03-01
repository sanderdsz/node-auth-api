import express from "express";
import { sessionRouter } from "./session.route";
import { userRouter } from "./user.route";

const router = express.Router();

router.use("/session", sessionRouter);
router.use("/user", userRouter);

export default router;