import * as dotenv from "dotenv";

dotenv.config();

const GITHUB_APP_OAUTH_URL = process.env
	.GITHUB_APP_OAUTH_URL as unknown as string;

/*
 * Function that construct the Auth entrypoint for GitHub.
 */
export const getGithubAuthorization = () => {
	return `${GITHUB_APP_OAUTH_URL}`;
};
