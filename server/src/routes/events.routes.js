const express = require('express');
const router = express.Router();

const eventsController = require('../controllers/eventsController');
const jwt = require('../middlewares/jwt');

router.get('/', (req, res) => {
  res.send('Hello World Events!');
});

router.post('/create', eventsController.store);
router.get('/list', eventsController.index);
router.get('/get', eventsController.get);

module.exports = router;
