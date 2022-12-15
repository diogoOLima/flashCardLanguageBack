const difficultyCardsStudentModel = require('../models/difficultyCardsStudentModel');

const getDifficultyCards = async (request, response) => {
  const {id_user} = request.params;
  console.log(id_user);
  const [difficultyCardsStudent] = await difficultyCardsStudentModel.getDifficultyCards(id_user);

  return response.status(200).json(difficultyCardsStudent);

};

const createDifficultyCardStudent = async (request, response) => {
  const createdDifficultyCardStudent = await difficultyCardsStudentModel.createDifficultyCards(request.body);
    
  return response.status(201).json(createdDifficultyCardStudent);
};

module.exports = {
  getDifficultyCards,
  createDifficultyCardStudent
};