import { getGithubNewRefreshToken } from "./github/getGithubNewRefreshToken";
import { query } from "../utils/databases/mysql";
import { saveAccessTokenRepository } from "../repositories/saveAccessToken.repository";
import { getUserDataExternalByUserId } from "../repositories/getUserDataExternaByUserId.repository";
import { getUserAccountByUserIdRepository } from "../repositories/getUserAccountByUserId.repository";

/*
 * Method that update the access and fresh tokens on both databases.
 */
export const updateTokensService = async (
	user_id: number,
	provider?: string
) => {
	const user_data = await getUserDataExternalByUserId(user_id);
	const user_account = await getUserAccountByUserIdRepository(user_id);
	const response = await getGithubNewRefreshToken(
		user_data.provider_refresh_token
	);
	const queryString = `
			UPDATE user_data_external 
			SET provider_refresh_token = '${response.refresh_token}'
			WHERE user_id = '${user_id}'
		`;
	// Persist the refresh_token into MySQL.
	await query(queryString);
	// Persist the access_token into Redis.
	await saveAccessTokenRepository(user_account.email, response.access_token);
	return response;
};
