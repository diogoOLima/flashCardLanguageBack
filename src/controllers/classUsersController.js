const classUsersModel = require('../models/classUsersModel');
const classDecksModel = require('../models/classDecksModel');
const deckCardsModel = require('../models/deckCardsModel');
const difficultyCardsStudentModel = require('../models/difficultyCardsStudentModelModel');

const setUserClass = async (request, response) => {
  const createdClassUser = classUsersModel.setClassUser(request.body);
  const decksClass = classDecksModel.getClassDecks(request.body);

  decksClass.array.forEach(element => {
    const deckCards = deckCardsModel.getDeckCards(element);
    deckCards.forEach(element => {
        difficultyCardsStudentModel.
    });
  });
  return response.status(200).json(createdClassUser);
};

module.exports = {
  setUserClass
};