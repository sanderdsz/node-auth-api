import { describe } from "@jest/globals";
import { getGithubAuth } from "./github.service";

describe("GithubService", () => {
	it("should be create the auth route", async () => {
		const url = getGithubAuth();

		expect(url.length).toBeGreaterThanOrEqual(1);
	});
});
