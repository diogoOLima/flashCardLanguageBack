const connection = require('./connection'); 

const getDifficultyCards = async (user) => {
  const query = 'SELECT  dcs.difficulty, dcs.card_id FROM users u INNER JOIN alunosDaTurma adt  ON u.id = adt.user_id INNER JOIN classes c ON adt.class_id = c.id INNER JOIN baralhosDaClasse bdc ON c.id = bdc.class_id INNER  JOIN decks d ON bdc.deck_id = d.id INNER JOIN cartasDoBaralho cdb ON d.id = cdb.deck_id INNER JOIN cards ca ON cdb.card_id = ca.id INNER JOIN difficultyCardsStudent dcs ON ca.id = dcs.card_id WHERE u.id = ?;';
  const difficultyCardsStudent = await connection.execute(query, [user]);

  return difficultyCardsStudent;
};

const createDifficultyCards = async (userCardDifficulty) => {
  const {user_id, card_id, difficulty} = userCardDifficulty;
  const query = 'INSERT INTO difficultyCardsStudent(user_id, card_id, difficulty) VALUES(?, ?, ?)';
  const [createdDifficultyCardStudent] = await connection.execute(query, [user_id, card_id, difficulty]);

  return {createdDifficultyCardStudentId: createdDifficultyCardStudent.insertId};
};

module.exports = {
  getDifficultyCards,
  createDifficultyCards
};