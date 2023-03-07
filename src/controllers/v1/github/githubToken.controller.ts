import { Request, Response } from "express";
import { getGithubTokenService } from "../../../services/github/getGithubToken.service";
import { updateTokensService } from "../../../services/updateTokens.service";
import { getUserDataExternalByRefreshTokenRepository } from "../../../repositories/getUserDataExternalByRefreshToken.repository";

/*
 * Token controller.
 */
export const githubTokenController = async (req: Request, res: Response) => {
	const code = req.query.code as string;
	const provider_refresh_token = req.query.refresh_token as string;
	try {
		/*
		 * If there's a provider_refresh_token from query param means that the
		 * client don't want a new user, just revalidate and refresh the tokens.
		 */
		if (provider_refresh_token) {
			// Find the user data that matches the refresh token.
			const user_data_external =
				await getUserDataExternalByRefreshTokenRepository(
					provider_refresh_token
				);
			// Update the access and refresh tokens according the user_id received.
			const tokens = await updateTokensService(user_data_external.user_id);
			return res.status(200).json({
				refresh_token: tokens.refresh_token,
				access_token: tokens.access_token,
			});
		}
		const { access_token, refresh_token } = await getGithubTokenService({
			code,
		});
		// Redirects to the user details route using the access token.
		res.redirect(
			`/api/v1/users/details/github?access_token=${access_token}&refresh_token=${refresh_token}`
		);
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json(error.message);
		}
	}
};
