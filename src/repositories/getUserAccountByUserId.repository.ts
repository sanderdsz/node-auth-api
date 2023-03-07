import { query } from "../utils/databases/mysql";

export const getUserAccountByUserIdRepository = async (user_id: number) => {
	const queryString = `SELECT * FROM user_account WHERE id = ${user_id}`;
	const data = await query(queryString);
	return data[0];
};
