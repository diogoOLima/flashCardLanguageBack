const cardsModel = require('../models/cardsModel');

const getAll = async (request, response) => {
  
  const [cards] = await cardsModel.getAll();

  return response.status(200).json(cards);
};

module.exports = {
  getAll
};