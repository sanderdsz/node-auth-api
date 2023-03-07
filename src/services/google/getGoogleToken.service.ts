import qs from "qs";
import axios from "axios";
import * as dotenv from "dotenv";
import { IGoogleToken } from "../../utils/interfaces/googleToken.interface";

dotenv.config();

const GOOGLE_OAUTH_CLIENT_ID = process.env
	.GOOGLE_OAUTH_CLIENT_ID as unknown as string;
const GOOGLE_OAUTH_CLIENT_SECRET = process.env
	.GOOGLE_OAUTH_CLIENT_SECRET as unknown as string;
const GOOGLE_OAUTH_REDIRECT_URL = process.env
	.GOOGLE_OAUTH_REDIRECT_URL as unknown as string;

export const getGoobleTokenService = async (code: string) => {
	const url = "https://oauth2.googleapis.com/token";
	try {
		const { data } = await axios.post(
			`${url}`,
			{
				client_id: GOOGLE_OAUTH_CLIENT_ID,
				client_secret: GOOGLE_OAUTH_CLIENT_SECRET,
				redirect_uri: GOOGLE_OAUTH_REDIRECT_URL,
				grant_type: "authorization_code",
				code,
			},
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		);
		const decoded = qs.parse(data) as unknown as IGoogleToken;
		return decoded;
	} catch (err: any) {
		console.log(err.message);
		throw new Error(err.message);
	}
};
