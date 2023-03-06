import express from "express";
import router from "./routes";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 8081;

app.use("/api/v1", router);

app.listen(port, function () {
	console.log("Listening on port " + port);
});
