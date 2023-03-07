import { Request, Response } from "express";
import { getGithubUserDetailsService } from "../../../services/github/getGithubUserDetails.service";
import { saveUserAccount } from "../../../repositories/insertUserAccount";

/*
 * GitHub user details controller
 */
export const githubUserDetailsController = async (
	req: Request,
	res: Response
) => {
	const refresh_token = req.query.refresh_token as string;
	const access_token = req.query.access_token as string;
	const provider_name = "GitHub";
	try {
		const { email, name, avatar_url, node_id } =
			await getGithubUserDetailsService(access_token);
		await saveUserAccount({
			name,
			email,
			access_token,
			refresh_token,
			provider_name,
			provider_id: node_id,
		});
		res.status(200).json({
			email: email,
			name: name,
			avatar_url: avatar_url,
			access_token: access_token,
			refresh_token: refresh_token,
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json(error.message);
		}
	}
};
