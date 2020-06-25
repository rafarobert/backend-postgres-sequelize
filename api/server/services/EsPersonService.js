const database = require('../src/models');

class EsPersonService {
	static async getAllPersons() {
		try {
			return await database.es_person.findAll();
		} catch (error) {
			throw error;
		}
	}

	static async addPerson(newPerson) {
		try {
			return await database.es_person.create(newPerson);
		} catch (error) {
			throw error;
		}
	}

	static async updatePerson(id, updatePerson) {
		try {
			const personToUpdate = await database.es_person.findOne({
				where: { id: Number(id) }

			});

			if (personToUpdate) {
				await database.es_person.update(updatePerson, { where: { id: Number(id) } });

				return updatePerson;
			}
			return null;
		} catch (error) {
			throw error;
		}
	}

	static async getAPerson(id) {
		try {
			const thePerson = await database.es_person.findOne({
				where: { id: Number(id) }
			});

			return thePerson;
		} catch (error) {
			throw error;
		}
	}

	static async deletePerson(id) {
		try {
			const personToDelete = await database.es_person.findOne({ where: { id: Number(id) } });

			if (personToDelete) {
				const deletedPerson = await database.es_person.destroy({
					where: { id: Number(id) }
				});
				return deletedPerson;
			}
			return null;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = EsPersonService;
