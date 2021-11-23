require('dotenv/config');
const { v4: uuidv4 } = require('uuid');
const jwt = require('../middlewares/jwt');

const Events = require('../models/Events');

async function index(req, res) {
  const events = await Events.findAll({
    attributes: ['uuid', 'name', 'email'], // alterar para os atributos certos
  });
  return res.json(events);
}

async function store(req, res) {
  const uuid = uuidv4();
  const [event, created] = await Event.create({}); // passar atributos
  return res.json('Novo evento criado.');
}

async function get(req, res) {
  const { uuid } = req.body;
  if (!uuid) {
    return res.status(400).json({ message: 'Bad Request' });
  }
  const event = await User.findOne({
    attributes: ['uuid', 'name', 'email'], // alterar para os atributos certos
    where: { uuid },
  });
  if (event) {
    return res.json(event);
  }
  return res.json({ message: 'Event not find' });
}

module.exports = { index, store, get };
