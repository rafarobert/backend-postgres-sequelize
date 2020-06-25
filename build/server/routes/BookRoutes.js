"use strict";

var _require = require('express'),
    Router = _require.Router;

var BookController = require('../controllers/BookController');

var router = Router();
router.get('/', BookController.getAllBooks);
router.post('/', BookController.addBook);
router.get('/:id', BookController.getABook);
router.put('/:id', BookController.updatedBook);
router["delete"]('/:id', BookController.deleteBook);
module.exports = router;
//# sourceMappingURL=BookRoutes.js.map