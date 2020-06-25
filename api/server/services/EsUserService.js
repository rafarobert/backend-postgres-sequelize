const database = require('../src/models');

class EsUserService {
	static async getAllUsers() {
		try {
			return await database.es_user.findAll({
				include: {
					model: database.es_person
				}
			});
		} catch (error) {
			throw error;
		}
	}

	static async addUser(newUser) {
		try {
			return await database.es_user.create(newUser);
		} catch (error) {
			throw error;
		}
	}

	static async updateUser(id, updateUser) {
		try {
			const userToUpdate = await database.es_user.findOne({
				where: { id: Number(id) },
			});

			if (userToUpdate) {
				await database.es_user.update(updateUser, { where: { id: Number(id) } });

				return updateUser;
			}
			return null;
		} catch (error) {
			throw error;
		}
	}

	static async getAUser(id) {
		try {
			const theUser = await database.es_user.findOne({
				where: { id: Number(id) },
				include: {
					model: database.es_person
				}
			});

			return theUser;
		} catch (error) {
			throw error;
		}
	}

	static async deleteUser(id) {
		try {
			const userToDelete = await database.es_user.findOne({ where: { id: Number(id) } });

			if (userToDelete) {
				const deletedUser = await database.es_user.destroy({
					where: { id: Number(id) }
				});
				return deletedUser;
			}
			return null;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = EsUserService;
