const PersonService = require('../services/EsPersonService');
const Util = require('../utils/Utils');

const util = new Util();

class EsPersonController {
	static async getAllPersons(req, res) {
		try {
			const allPersons = await PersonService.getAllPersons();
			if (allPersons.length > 0) {
				util.setSuccess(200, 'Persons retrieved', allPersons);
			} else {
				util.setSuccess(200, 'No person found');
			}
			return util.send(res);
		} catch (error) {
			util.setError(400, error);
			return util.send(res);
		}
	}

	static async addPerson(req, res) {
		// if (!req.body.title || !req.body.price || !req.body.description) {
		// 	util.setError(400, 'Please provide complete details');
		// 	return util.send(res);
		// }
		const newPerson = req.body;
		try {
			const createdPerson = await PersonService.addPerson(newPerson);
			util.setSuccess(201, 'Person Added!', createdPerson);
			return util.send(res);
		} catch (error) {
			util.setError(400, error.message);
			return util.send(res);
		}
	}

	static async updatedPerson(req, res) {
		const alteredPerson = req.body;
		const { id } = req.params;
		if (!Number(id)) {
			util.setError(400, 'Please input a valid numeric value');
			return util.send(res);
		}
		try {
			const updatePerson = await PersonService.updatePerson(id, alteredPerson);
			if (!updatePerson) {
				util.setError(404, `Cannot find person with the id: ${id}`);
			} else {
				util.setSuccess(200, 'Person updated', updatePerson);
			}
			return util.send(res);
		} catch (error) {
			util.setError(404, error);
			return util.send(res);
		}
	}

	static async getAPerson(req, res) {
		const { id } = req.params;

		if (!Number(id)) {
			util.setError(400, 'Please input a valid numeric value');
			return util.send(res);
		}

		try {
			const thePerson = await PersonService.getAPerson(id);

			if (!thePerson) {
				util.setError(404, `Cannot find person with the id ${id}`);
			} else {
				util.setSuccess(200, 'Found Person', thePerson);
			}
			return util.send(res);
		} catch (error) {
			util.setError(404, error);
			return util.send(res);
		}
	}

	static async deletePerson(req, res) {
		const { id } = req.params;

		if (!Number(id)) {
			util.setError(400, 'Please provide a numeric value');
			return util.send(res);
		}

		try {
			const personToDelete = await PersonService.deletePerson(id);

			if (personToDelete) {
				util.setSuccess(200, 'Person deleted');
			} else {
				util.setError(404, `Person with the id ${id} cannot be found`);
			}
			return util.send(res);
		} catch (error) {
			util.setError(400, error);
			return util.send(res);
		}
	}
}

module.exports = EsPersonController;
