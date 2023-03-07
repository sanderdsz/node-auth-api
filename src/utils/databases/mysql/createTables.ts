import { createTableUserAccount } from "../../../repositories/createTableUserAccount";
import { createTableUserDataExternal } from "../../../repositories/createTableUserDataExternal";

export const createTables = () => {
	void createTableUserAccount();
	void createTableUserDataExternal();
};
