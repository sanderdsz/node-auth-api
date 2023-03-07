const { Redis } = require("@upstash/redis");

export const redis = new Redis({
	url: "https://ace-pangolin-33173.upstash.io",
	token:
		"AYGVACQgNTYxMTBkMGEtZDMxZS00M2IwLTg5NjEtMjI0YzIxN2Q2ZWI4NjU2NmZiMThkNmZmNDNiMDg0MjVjYTdhMjUzMzE0YjQ=",
});
