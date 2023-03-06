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
	const access_token = req.query.access_token as string;
	try {
		const { email, name, avatar_url } = await getGithubUserDetailsService(
			access_token
		);
		await saveUserAccount({ name, email });
		res.status(200).json({
			email: email,
			name: name,
			avatar_url: avatar_url,
		});
	} catch (err: any) {
		throw new Error(err.message);
	}
};
