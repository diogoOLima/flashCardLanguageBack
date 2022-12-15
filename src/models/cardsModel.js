const connection = require('./connection'); 

const getAll = async () => {
  const cards = await connection.execute('SELECT * FROM cards');

  return cards;
};

const getCardsDeck = async (user) => {
  const query = 'SELECT ca.id, ca.frasePort, ca.fraseIng FROM users u INNER JOIN alunosDaTurma adt  ON u.id = adt.user_id INNER JOIN classes c ON adt.class_id = c.id INNER JOIN baralhosDaClasse bdc ON c.id = bdc.class_id INNER  JOIN decks d ON bdc.deck_id = d.id INNER JOIN cartasDoBaralho cdb ON d.id = cdb.deck_id INNER JOIN cards ca ON cdb.card_id = ca.id WHERE u.id = ?;';
  const cards = await connection.execute(query, [user]);

  return cards;
};

const createCard = async (card) => {

  const {fraseIng, frasePort} = card;

  const query = 'INSERT INTO cards(fraseIng, frasePort) VALUES (?, ?)';

  const [createdCard] = await connection.execute(query, [fraseIng, frasePort]);
  
  return {createdCardId: createdCard.insertId};
};

const deleteCard = async (id) => {
  await connection.execute('DELETE FROM cards WHERE id = ?', [id]);
};

const updateCard = async (id, card) => {
  const {fraseIng, frasePort} = card;

  const query = 'UPDATE cards SET fraseIng = ?, frasePort = ? WHERE id = ?';

  await connection.execute(query, [fraseIng, frasePort, id]);
};

module.exports = {
  getAll,
  getCardsDeck,
  createCard,
  deleteCard,
  updateCard
};