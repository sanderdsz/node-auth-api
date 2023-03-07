import { mysql } from "../utils/database/mysql/config";

export const createTableUserDataExternal = async (): Promise<void> => {
	await mysql.query(
		`CREATE TABLE IF NOT EXISTS user_data_external (
        id INT(11) NOT NULL AUTO_INCREMENT,
        user_id INT(11),
        provider_id VARCHAR(255),
        provider_name VARCHAR(50),
        provider_refresh_token VARCHAR(255),
        PRIMARY KEY (id),
        KEY user_id_idx (user_id)
		);`
	);
};
