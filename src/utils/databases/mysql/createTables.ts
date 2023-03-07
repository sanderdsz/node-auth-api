import { createTableUserAccountRepository } from "../../../repositories/createTableUserAccount.repository";
import { createTableUserDataExternalRepository } from "../../../repositories/createTableUserDataExternal.repository";

export const createTables = () => {
	void createTableUserAccountRepository();
	void createTableUserDataExternalRepository();
};
