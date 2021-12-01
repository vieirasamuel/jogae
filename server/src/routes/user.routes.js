const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const jwt = require('../middlewares/jwt');

router.get('/', (req, res) => {
  res.send('Hello World User!');
});

router.post('/register', userController.store);
router.get('/list', userController.index);
router.get('/get', userController.get);
router.post('/auth', userController.auth);

module.exports = router;
