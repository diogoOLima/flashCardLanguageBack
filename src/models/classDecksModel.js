const connection = require('./connection'); 

const getClassDecks = async (classe) =>{
  const {class_id} = classe;

  const [decks] = connection.execute('SELECT * FROM baralhosDaClasse WHERE class_id = ?;', [class_id]);

  return decks;
};

module.exports = {
  getClassDecks
};