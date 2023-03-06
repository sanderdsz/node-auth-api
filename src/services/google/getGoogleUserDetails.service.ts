import axios from "axios";

type GoogleUserProps = {
	id: string;
	email: string;
	name: string;
	given_name: string;
	family_name: string;
	picture: string;
};

export const getGoogleUserDetailsService = async (
	access_token: string
): Promise<GoogleUserProps> => {
	const url = "https://www.googleapis.com/oauth2/v2/userinfo";
	try {
		const { data } = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		return data;
	} catch (err: any) {
		throw new Error(err.message);
	}
};
