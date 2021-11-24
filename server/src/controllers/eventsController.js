require('dotenv/config');
const { v4: uuidv4 } = require('uuid');

const Events = require('../models/Events');

async function index(req, res) {
  const events = await Events.findAll({
    attributes: ['uuid', 'nome', 'organizador'],
  });
  return res.json(events);
}

async function store(req, res) {
  const uuid = uuidv4();
  const {
    nome,
    local,
    cidade,
    estado,
    pais,
    situacao,
    modalidade,
    organizador,
    descricao,
    data,
    valor,
    jogadores,
    espectadores,
  } = req.body;
  const event = await Events.create({
    uuid,
    nome,
    local,
    cidade,
    estado,
    pais,
    situacao,
    modalidade,
    organizador,
    descricao,
    data,
    valor,
    jogadores,
    espectadores,
  });
  if (event) {
    return res.status(201).json(event);
  }
  return res.status(400).json('Falha ao criar novo evento.');
}

async function get(req, res) {
  const { uuid } = req.body;
  if (!uuid) {
    return res.status(400).json({ message: 'Bad Request' });
  }
  const event = await Events.findOne({
    attributes: ['uuid', 'nome', 'organizador'], // alterar para os atributos certos
    where: { uuid },
  });
  if (event) {
    return res.json(event);
  }
  return res.json({ message: 'Event not find' });
}

module.exports = { index, store, get };
