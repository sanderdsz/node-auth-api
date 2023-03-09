import { saveUserDataExternalRepository } from "./saveUserDataExternal.repository";
import { query } from "../utils/databases/mysql";
import { saveAccessTokenRepository } from "./saveAccessToken.repository";

type UserAccountProps = {
	name: string;
	email: string;
	access_token: string;
	refresh_token: string;
	provider?: string;
	provider_id?: string;
	provider_name?: string;
};

/*
 * Save new user into user_account
 */
export const saveUserAccountRepository = async ({
	name,
	email,
	access_token,
	refresh_token,
	provider_id,
	provider_name,
}: UserAccountProps) => {
	const queryExistUser = `SELECT * FROM user_account WHERE email = '${email}'`;
	const queryInsertUser = `INSERT INTO user_account (name, email) VALUES ('${name}', '${email}')`;
	// Verify if there's a user register with the same e-mail.
	const user = await query(queryExistUser);
	if (user.length != 0) {
		console.log(`User ${email} already registered`);
		return `User ${email} already registered`;
	} else {
		const result = await query(queryInsertUser);
		// TODO: Verification of external or internal auth data.
		// When the auth is external, persist into external data table.
		const user_id = result.insertId as number;
		const id = provider_id as string;
		const nameProvider = provider_name as string;
		await saveUserDataExternalRepository({
			user_id,
			provider_id: id,
			provider_name: nameProvider,
			provider_refresh_token: refresh_token,
		});
		// Persist the access_token into Redis.
		await saveAccessTokenRepository(email, access_token);
	}
	console.log(`User ${email} save success`);
};
