import * as dotenv from "dotenv";

dotenv.config();

const GITHUB_OAUTH_CLIENT_ID = process.env
	.GITHUB_OAUTH_CLIENT_ID as unknown as string;

/*
 * Function that construct the Auth entrypoint for GitHub.
 */
export const getGithubAuthorization = () => {
	return `${"https://github.com/apps/node-auth"}`;
};
