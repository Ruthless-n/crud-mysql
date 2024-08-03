const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.index);
router.get('/create', postController.showCreatePage);
router.post('/create', postController.create);
router.get('/:id/edit', postController.showEditPage);
router.post('/:id/edit', postController.edit);
router.post('/:id/delete', postController.delete);

module.exports = router;