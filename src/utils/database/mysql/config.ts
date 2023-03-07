import * as dotenv from "dotenv";

dotenv.config();

const MYSQL_PLANETSCALE_URL = process.env
	.MYSQL_PLANETSCALE_URL as unknown as string;

// Database connection
const connection = require("mysql");
export const mysql = connection.createConnection(MYSQL_PLANETSCALE_URL);
