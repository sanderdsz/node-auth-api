import { describe } from "@jest/globals";
import { getGithubAuthorization } from "./getGithubAuthorization.service";

describe("getGithubAuthorizationService", () => {
	it("should be create the auth route", async () => {
		const url = getGithubAuthorization();
		expect(url.length).toBeGreaterThanOrEqual(1);
	});
});
