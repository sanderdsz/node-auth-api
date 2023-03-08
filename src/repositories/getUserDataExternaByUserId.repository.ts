import { query } from "../utils/databases/mysql";

export const getUserDataExternalByUserIdRepository = async (user_id: number) => {
	const queryString = `SELECT * FROM user_data_external WHERE user_id = ${user_id}`;
	const data = await query(queryString);
	return data[0];
};
