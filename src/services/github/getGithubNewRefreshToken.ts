import qs from "qs";
import axios from "axios";

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
export const getGithubNewRefreshToken = async (
	refresh_token: string
): Promise<GithubTokenProps> => {
	const url = "https://github.com/login/oauth/access_token";
	const options = {
		client_id: GITHUB_APP_OAUTH_CLIENT_ID,
		client_secret: GITHUB_APP_OAUTH_CLIENT_SECRET,
		refresh_token: refresh_token,
		grant_type: "refresh_token",
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
