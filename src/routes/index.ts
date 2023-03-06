import express from "express";
import { sessionRouter } from "./session.route";
import { userRouter } from "./user.route";

const router = express.Router();

router.use("/sessions", sessionRouter);
router.use("/users", userRouter);

export default router;
