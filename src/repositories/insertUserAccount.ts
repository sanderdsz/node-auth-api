import { mysql } from "../utils/database/mysql/config";
import { redis } from "../utils/database/redis/config";
import { saveUserDataExternal } from "./insertUserDataExternal";

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
export const saveUserAccount = async ({
	name,
	email,
	access_token,
	refresh_token,
	provider_id,
	provider_name,
}: UserAccountProps) => {
	// Verify if there's a user register with the same e-mail.
	await mysql.query(
		`SELECT * FROM user_account where email = ?`,
		[email],
		async function (err: any, result: any) {
			if (err) throw err;
			if (result[0]) {
				// If there's a user in the db, already registered.
				console.log(`User ${email} already registered`);
				return `User ${email} already registered`;
			}
			// If there's no user with the same e-mail, persist it.
			else
				await mysql.query(
					`INSERT INTO user_account (name, email) VALUES (?, ?);`,
					[name, email],
					async function (err: any, result: any) {
						// TO-DO: Verification of external or internal auth data.
						// When the auth is external, persist into external data table.
						const user_id = result.insertId as number;
						const id = provider_id as string;
						const name = provider_name as string;
						await saveUserDataExternal({
							user_id,
							provider_id: id,
							provider_name: name,
							provider_refresh_token: refresh_token,
						});
						// Persist the access_token into Redis.
						await saveAccessToken(email, access_token);
					}
				);
			console.log(`User ${email} save success`);
		}
	);
};

/*
 * Save the tokens into Redis database.
 */
const saveAccessToken = async (email: string, access_token: string) => {
	await redis.set(email, access_token);
};
