import { Request, Response } from "express";
import { getGithubAuth, getGithubToken, getGithubUser } from "../services/github.service";

/*
 * Authorization controller
 */
export const githubAuthorizationHandler = async (req: Request, res: Response) => {
  const url = getGithubAuth()

  // Redirects to the GitHub frontend authorization that receives code_request param
  res.redirect(url)
}


/*
 * Token controller
 */
export const githubTokenHandler = async (req: Request, res: Response) => {
  const code = req.query.code as string;

  const { access_token } = await getGithubToken({ code });

  // Redirects to the user details route using the access token
  res.redirect(`/api/user/github?access_token=${access_token}`);
}

/*
 * GitHub user details controller
 */
export const githubUserHandler = async (req: Request, res: Response) => {
  console.log('oi')
  const access_token = req.query.access_token as string;
  const { email, name, avatar_url } = await getGithubUser(access_token);

  res.status(200).json({
    email: email,
    name: name,
    avatar_url: avatar_url
  })
}

