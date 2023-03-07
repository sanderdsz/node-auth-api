import { query } from "../utils/databases/mysql";

type UserDataExternalProps = {
	user_id: number;
	provider_id: string;
	provider_name: string;
	provider_refresh_token: string;
};

/*
 * Persist into MySQL the data received from oauth2 provider
 */
export const saveUserDataExternal = async ({
	user_id,
	provider_id,
	provider_name,
	provider_refresh_token,
}: UserDataExternalProps) => {
	await query(
		`INSERT INTO user_data_external 
    	(user_id, provider_id, provider_name, provider_refresh_token)
    	VALUES ('${user_id}', '${provider_id}', '${provider_name}', '${provider_refresh_token}')`
	);
};
