import qs from "qs";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const GITHUB_OAUTH_CLIENT_ID = process.env
	.GITHUB_OAUTH_CLIENT_ID as unknown as string;
const GITHUB_OAUTH_CLIENT_SECRET = process.env
	.GITHUB_OAUTH_CLIENT_SECRET as unknown as string;

const GITHUB_APP_OAUTH_CLIENT_ID = process.env
	.GITHUB_APP_OAUTH_CLIENT_ID as unknown as string;
const GITHUB_APP_OAUTH_CLIENT_SECRET = process.env
	.GITHUB_APP_OAUTH_CLIENT_SECRET as unknown as string;

type GithubTokenProps = {
	access_token: string;
	refresh_token: string;
};

/*
 * Function that receives the GitHub token.
 */
export const getGithubTokenService = async ({
	code,
}: {
	code: string;
}): Promise<GithubTokenProps> => {
	const url = "https://github.com/login/oauth/access_token";
	const options = {
		client_id: GITHUB_APP_OAUTH_CLIENT_ID,
		client_secret: GITHUB_APP_OAUTH_CLIENT_SECRET,
		code,
	};
	const queryString = qs.stringify(options);
	try {
		const { data } = await axios.post(
			`${url}?${queryString}`,
			{
				"Content-Type": "application/x-www-form-urlencoded",
			},
			{ headers: { accept: "application/json" } }
		);
		const decoded = qs.parse(data) as GithubTokenProps;
		return decoded;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
