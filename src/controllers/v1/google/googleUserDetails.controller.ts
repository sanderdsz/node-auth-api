import { Request, Response } from "express";
import { getGoogleUserDetailsService } from "../../../services/google/getGoogleUserDetails.service";

export const googleUserDetailsController = async (
	req: Request,
	res: Response
) => {
	const access_token = req.query.access_token as string;
	const refresh_token = req.query.refresh_token as string;
	const { email, name, picture } = await getGoogleUserDetailsService(
		access_token
	);
	res.status(200).json({
		email: email,
		name: name,
		picture: picture,
		refresh_token: refresh_token,
		access_token: access_token,
	});
};
