import { Request, Response } from "express";
import { getGoogleAuthorization } from "../../../services/google/getGoogleAuthorization.service";

export const googleAuthorizationController = async (
	req: Request,
	res: Response
) => {
	const url = getGoogleAuthorization();
	res.redirect(url);
};
