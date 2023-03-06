import { database } from "../utils/database/config";

type UserAccountProps = {
	name: string;
	email: string;
};

/*
 * Save new user into user_account
 */
export const saveUserAccount = async ({ name, email }: UserAccountProps) => {
	// Verify if there's a user register with the same e-mail.
	await database.query(
		`SELECT * FROM user_account where email = ?`,
		[email],
		async function (err: any, result: any) {
			if (err) throw err;
			if (result[0]) {
				console.log(`User ${email} already registered`);
				return "User already registered"
			}
			// If there's no user with the same e-mail, persist it.
			else await database.query(
				`INSERT INTO user_account (name, email) VALUES (?, ?);`,
				[name, email]
			);
			console.log(`User ${email} save success`);
		}
	);
	await database.end();
};
