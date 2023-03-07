import { query } from "../utils/databases/mysql";

export const createTableUserAccountRepository = async (): Promise<void> => {
	await query(
		`CREATE TABLE IF NOT EXISTS user_account (
			 id INT(11) NOT NULL AUTO_INCREMENT,
			 name VARCHAR(255) NOT NULL,
			 email VARCHAR(255) NOT NULL,
			 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			 modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
			 PRIMARY KEY (id)
		);`
	);
};
