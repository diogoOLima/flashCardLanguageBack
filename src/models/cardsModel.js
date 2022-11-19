const connection = require('./connection'); 

const getAll = async () => {
  const cards = await connection.execute('SELECT * FROM cards');

  return cards;
};

module.exports = {
  getAll
};