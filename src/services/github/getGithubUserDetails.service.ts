import axios from "axios";

type GithubUserProps = {
	node_id: string;
	email: string;
	name: string;
	avatar_url: string;
};

/*
 * Function that receive user details from GitHub API.
 */
export const getGithubUserDetailsService = async (
	access_token: string
): Promise<GithubUserProps> => {
	try {
		const { data } = await axios.get(`https://api.github.com/user`, {
			headers: {
				Authorization: "token " + access_token,
			},
		});
		return data;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
