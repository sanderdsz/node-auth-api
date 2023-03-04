import { Request, Response } from "express";
import { getGithubTokenService } from "../services/getGithubToken.service";

/*
 * Token controller
 */
export const githubTokenController = async (req: Request, res: Response) => {
	const code = req.query.code as string;
	const { access_token } = await getGithubTokenService({ code });
	// Redirects to the user details route using the access token
	res.redirect(`/api/user/github?access_token=${access_token}`);
};

