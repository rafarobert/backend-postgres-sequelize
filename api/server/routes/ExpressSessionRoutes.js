const { Router } = require('express');
const ExpressSessionController = require('../controllers/ExpressSessionController');

const router = Router();

router.get('/', ExpressSessionController.accessSession);

// router.get('/', ExpressSessionController.getAllBooks);
// router.post('/', ExpressSessionController.addBook);
// router.get('/:id', ExpressSessionController.getABook);
// router.put('/:id', ExpressSessionController.updatedBook);
// router.delete('/:id', ExpressSessionController.deleteBook);

module.exports = router;
