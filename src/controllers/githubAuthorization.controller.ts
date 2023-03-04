import { Request, Response } from "express";
import { getGithubAuthorization } from "../services/getGithubAuthorization.service";

/*
 * Authorization controller
 */
export const githubAuthorizationController = async (
	req: Request,
	res: Response
) => {
	const url = getGithubAuthorization();
	// Redirects to the GitHub frontend authorization that receives code_request param
	res.redirect(url);
};
