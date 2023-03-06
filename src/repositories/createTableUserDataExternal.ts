import { database } from "../utils/database/config";

export const createTableUserDataExternal = async (): Promise<void> => {
	await database.query(
		`CREATE TABLE if NOT EXISTS user_data_external (
        id INT(11) NOT NULL AUTO_INCREMENT,
        user_id INT(11),
        provider_name VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY user_id_idx (user_id)
		);`
	);
	await database.end();
};
