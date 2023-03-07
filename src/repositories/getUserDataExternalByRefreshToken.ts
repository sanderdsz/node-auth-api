import { query } from "../utils/databases/mysql";
import { IUserDataExternal } from "../utils/interfaces/userDataExternal.interface";

export const getUserDataExternalByRefreshToken = async (
	refresh_token: string
): Promise<IUserDataExternal> => {
	const queryString = `SELECT * FROM user_data_external WHERE provider_refresh_token = '${refresh_token}'`;
	const data = await query(queryString);
	return data[0];
};
