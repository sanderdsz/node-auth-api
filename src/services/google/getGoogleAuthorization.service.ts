import * as dotenv from "dotenv";

dotenv.config();

const GOOGLE_OAUTH_CLIENT_ID = process.env
	.GOOGLE_OAUTH_CLIENT_ID as unknown as string;
const GOOGLE_OAUTH_REDIRECT_URL = process.env
	.GOOGLE_OAUTH_REDIRECT_URL as unknown as string;

export const getGoogleAuthorization = () => {
	const url = `${"https://accounts.google.com/o/oauth2/v2/auth"}`;
	const options = {
		redirect_uri: GOOGLE_OAUTH_REDIRECT_URL,
		client_id: GOOGLE_OAUTH_CLIENT_ID,
		access_type: "offline",
		response_type: "code",
		prompt: "consent",
		scope: [
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
		].join(" "),
	};
	const queryString = new URLSearchParams(options);
	return `${url}?${queryString.toString()}`;
};
