import { query } from "../utils/databases/mysql";

export const getUserDataExternalByRefreshToken = async (
	refresh_token: string
) => {
	const queryString = `SELECT provider_refresh_token FROM user_data_external WHERE provider_refresh_token = ${refresh_token}`;
	const data = await query(queryString);
	return data[0].provider_refresh_token;
};
