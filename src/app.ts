import express from "express";
import router from "./routes";

const app = express();
const port = 8081;

app.use('/api', router)

app.listen(port, function() {
  console.log("Listening on port " + port);
});