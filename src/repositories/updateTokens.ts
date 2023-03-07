import { getGithubNewRefreshToken } from "../services/github/getGithubNewRefreshToken";
import { query } from "../utils/databases/mysql";
import { saveAccessToken } from "./saveAccessToken";
import { getUserDataExternalByUserId } from "./getUserDataExternaByUserId";
import { getUserAccountByUserId } from "./getUserAccountByUserId";

export const updateTokens = async (user_id: number, provider?: string) => {
	const user_data = await getUserDataExternalByUserId(user_id);
	const user_account = await getUserAccountByUserId(user_id);
	const response = await getGithubNewRefreshToken(
		user_data.provider_refresh_token
	);
	const queryString = `
			UPDATE user_data_external 
			SET provider_refresh_token = '${response.refresh_token}'
			WHERE user_id = '${user_id}'
		`;
	await query(queryString);
	// Persist the access_token into Redis.
	await saveAccessToken(user_account.email, response.access_token);
	return response;
};
