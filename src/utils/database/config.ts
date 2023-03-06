import * as dotenv from "dotenv";

dotenv.config();

const MYSQL_PLANETSCALE_URL = process.env
	.MYSQL_PLANETSCALE_URL as unknown as string;

// Database connection
const mysql = require("mysql");
export const database = mysql.createConnection(MYSQL_PLANETSCALE_URL);
