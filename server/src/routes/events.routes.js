const express = require('express');
const router = express.Router();

const eventsController = require('../controllers/eventsController');
const jwt = require('../middlewares/jwt');

router.get('/', (req, res) => {
  res.send('Hello World Events!');
});

router.post('/create', jwt.verify, eventsController.store);
router.get('/list', jwt.verify, eventsController.index);
router.get('/get', jwt.verify, eventsController.get);

module.exports = router;
