import { Request, Response } from "express";
import { getAccessTokenRepository } from "../../repositories/getAccessToken.repository";

/*
 * Access Token controller that receives the email as query param.
 */
export const accessTokenController = async (req: Request, res: Response) => {
	const email = req.query.email as string;
	try {
		// Pass the e-mail as key value to the repository.
		const data = await getAccessTokenRepository(email);
		if (!data) {
			return res.status(400).json({
				error: "Invalid e-mail.",
			});
		}
		return res.status(200).json({
			access_token: data,
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(500).json(error.message);
		}
	}
};
