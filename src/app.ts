require("dotenv").config();
import express from "express";
import router from "./routes";
import { createTables } from "./utils/databases/mysql/createTables";

const app = express();
const port = 8081;
createTables();

app.use("/api/v1", router);

app.listen(port, function () {
	console.log("Listening on port " + port);
});
