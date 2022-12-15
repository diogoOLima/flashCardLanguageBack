const cardsModel = require('../models/cardsModel');

const getAll = async (_request, response) => {
  
  const [cards] = await cardsModel.getAll();

  return response.status(200).json(cards);
};

const getCardsDeck = async (request, response) => {
  const {id} = request.params;

  const [cards] = await cardsModel.getCardsDeck(id);
  return response.status(200).json(cards);
};

const createCard = async (request, response) => {
  const createdCard = await cardsModel.createCard(request.body);
  
  return response.status(201).json(createdCard);
};

const deleteCard = async (request, response) => {
  const { id } = request.params;

  await cardsModel.deleteCard(id);
  
  return response.status(204).json();
};

const updateCard = async (request, response) => {
  const { id } = request.params;

  await cardsModel.updateCard(id, request.body);
  
  return response.status(204).json();
};

module.exports = {
  getAll,
  getCardsDeck,
  createCard,
  deleteCard,
  updateCard
};