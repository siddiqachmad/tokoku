const router = require('express').Router();
const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);
router.post('/', ProductController.store);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);
module.exports = router;