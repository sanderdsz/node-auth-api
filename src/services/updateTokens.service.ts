import { getGithubNewRefreshToken } from "./github/getGithubNewRefreshToken";
import { query } from "../utils/databases/mysql";
import { saveAccessTokenRepository } from "../repositories/saveAccessToken.repository";
import { getUserAccountByUserIdRepository } from "../repositories/getUserAccountByUserId.repository";
import { getUserDataExternalByRefreshTokenRepository } from "../repositories/getUserDataExternalByRefreshToken.repository";

/*
 * Method that update the access and fresh tokens on both databases.
 */
export const updateTokensService = async (
	provider_refresh_token: string,
	provider?: string
) => {
	// Find the user data that matches the refresh token.
	const user_data_external = await getUserDataExternalByRefreshTokenRepository(
		provider_refresh_token
	);
	// Find the user account that matches the user_id.
	const user_account = await getUserAccountByUserIdRepository(
		user_data_external.user_id
	);
	// Get a new set of refresh and access tokens from GitHub API.
	const response = await getGithubNewRefreshToken(provider_refresh_token);
	const queryString = `
			UPDATE user_data_external 
			SET provider_refresh_token = '${response.refresh_token}'
			WHERE user_id = '${user_data_external.user_id}'
		`;
	// Persist the new refresh_token into MySQL.
	await query(queryString);
	// Persist the new access_token into Redis.
	await saveAccessTokenRepository(user_account.email, response.access_token);
	return response;
};
