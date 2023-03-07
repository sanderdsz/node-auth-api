import { Request, Response } from "express";
import { getGithubTokenService } from "../../../services/github/getGithubToken.service";
import { getProviderRefreshTokenByUserId } from "../../../repositories/getProviderRefreshTokenByUserId";

/*
 * Token controller
 */
export const githubTokenController = async (req: Request, res: Response) => {
	const code = req.query.code as string;
	const provider_refresh_token = req.query.refresh_token as string;
	const user_id = 1;
	// const redirect = req.query.redirect as string;
	const redirect = "false";
	try {
		if (provider_refresh_token) {
			const data = await getProviderRefreshTokenByUserId(user_id);
			return res.status(200).json({
				refresh_token: data,
			});
		}
		const { access_token, refresh_token } = await getGithubTokenService({
			code,
		});
		// Redirects to the user details route using the access token
		res.redirect(
			`/api/v1/users/details/github?access_token=${access_token}&refresh_token=${refresh_token}`
		);
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json(error.message);
		}
	}
};
