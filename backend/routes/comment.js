const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const commentCtrl = require('../controllers/comment');

router.post('/', auth, commentCtrl.createComment);
router.get('/', auth, commentCtrl.getAllComments);
router.get('/:id', auth, commentCtrl.getOneComment);
router.put('/:id', auth, commentCtrl.updateComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;