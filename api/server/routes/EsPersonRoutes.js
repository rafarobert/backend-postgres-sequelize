const { Router } = require('express');
const PersonController = require('../controllers/EsPersonController');

const router = Router();

router.get('/', PersonController.getAllPersons);
router.post('/', PersonController.addPerson);
router.get('/:id', PersonController.getAPerson);
router.put('/:id', PersonController.updatedPerson);
router.delete('/:id', PersonController.deletePerson);

module.exports = router;
