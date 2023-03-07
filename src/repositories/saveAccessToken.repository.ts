import { redis } from "../utils/databases/redis/config";

export const saveAccessTokenRepository = async (
	email: string,
	access_token: string
) => {
	await redis.set(email, access_token);
};
