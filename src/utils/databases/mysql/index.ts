const MYSQL_PLANETSCALE_URL = process.env
	.MYSQL_PLANETSCALE_URL as unknown as string;

const database = require("mysql2/promise");

// This function build a simple query to abstract the method.
export const query = async (queryString: string) => {
	const connection = await database.createConnection(MYSQL_PLANETSCALE_URL);
	const [rows, fields] = await connection.execute(queryString);
	// End the database connection after the promise.
	connection.end();
	// TODO: verify future needs to export fields object.
	return rows;
};
