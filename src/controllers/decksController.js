const decksModel = require('../models/decksModel');

const getAll = async (_request, response) => {
  const [decks] = await decksModel.getAll();

  return response.status(200).json(decks);
};

const getDecksUser = async (request, response) => {
  const {id} = request.params;

  const [decks] = await decksModel.getDecksUser(id);

  return response.status(200).json(decks);
};

const createDeck = async (request, response) => {
  const createdCard = await decksModel.createDeck(request.body);

  return response.status(201).json(createdCard);
};

const deleteDeck = async (request, response) => {
  const {id} = request.params;

  await decksModel.deleteDeck(id);

  return response.status(204).json();
};

const updateDeck = async (request, response) => {
  const { id } = request.params;
  await decksModel.updateDeck(id, request.body);

  return response.status(204).json();
};

module.exports = {
  getAll,
  getDecksUser,
  createDeck,
  deleteDeck,
  updateDeck
};