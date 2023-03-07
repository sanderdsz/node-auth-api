import { Request, Response } from "express";
import { getGoobleTokenService } from "../../../services/google/getGoogleToken.service";

export const googleTokenController = async (req: Request, res: Response) => {
	const code = req.query.code as string;
	const { access_token, refresh_token } = await getGoobleTokenService(code);
	res.redirect(
		`/api/v1/users/details/google?access_token=${access_token}&refresh_token=${refresh_token}`
	);
};
