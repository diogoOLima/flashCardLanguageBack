const connection = require('./connection');

const getAll = async () => {
  const decks = await connection.execute('SELECT * FROM decks');

  return decks;
};

const getDecksUser = async (user) => {
  const query = 'SELECT  d.nome, d.id FROM users u INNER JOIN alunosDaTurma adt ON u.id = adt.user_id INNER JOIN classes c ON adt.class_id = c.id INNER JOIN baralhosDaClasse bdc ON c.id = bdc.class_id INNER JOIN decks d ON bdc.deck_id = d.id WHERE u.id = ?';
  
  const decks = await connection.execute(query, [user]);

  return decks;
};

const createDeck = async (deck) => {
  const{ nome } = deck;

  const query = 'INSERT INTO decks(nome) VALUES (?)';
  const [createdDeck] = await connection.execute(query, [nome]);
  
  return {createdDeckId: createdDeck.insertId};
};

const deleteDeck = async (id) => {
  await connection.execute('DELETE FROM decks WHERE id = ?', [id]);
};

const updateDeck = async (id, deck) => {
  const {nome} = deck;

  const query = 'UPDATE decks SET nome = ? WHERE id = ?';

  await connection.execute(query, [nome, id]);
};

module.exports = {
  getAll,
  getDecksUser,
  createDeck,
  deleteDeck,
  updateDeck
};