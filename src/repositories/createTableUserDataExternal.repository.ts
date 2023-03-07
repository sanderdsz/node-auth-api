import { query } from "../utils/databases/mysql";

export const createTableUserDataExternalRepository =
	async (): Promise<void> => {
		await query(
			`CREATE TABLE IF NOT EXISTS user_data_external (
        id INT(11) NOT NULL AUTO_INCREMENT,
        user_id INT(11),
        provider_id VARCHAR(255),
        provider_name VARCHAR(50),
        provider_refresh_token VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY user_id_idx (user_id)
		);`
		);
	};
