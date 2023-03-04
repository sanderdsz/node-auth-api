import {Request, Response} from "express";
import {getGithubUserDetailsService} from "../services/getGithubUserDetails.service";

/*
 * GitHub user details controller
 */
export const githubUserDetailsController = async (req: Request, res: Response) => {
  const access_token = req.query.access_token as string;
  const { email, name, avatar_url } = await getGithubUserDetailsService(access_token);
  res.status(200).json({
    email: email,
    name: name,
    avatar_url: avatar_url,
  });
};
