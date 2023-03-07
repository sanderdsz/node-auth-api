import { query } from "../utils/databases/mysql";

export const getProviderRefreshTokenByUserIdRepository = async (user_id: number) => {
	const queryString = `SELECT provider_refresh_token FROM user_data_external WHERE user_id = ${user_id}`;
	const data = await query(queryString);
	return data[0].provider_refresh_token;
};
