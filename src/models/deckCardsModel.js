const connection = require('./connection');

const getDeckCards = async (deck) => {
  const {deck_id} = deck;

  const [cards] = connection.execute('SELECT * FROM cartasDoBaralho WHERE deck_id = ?;', [deck_id]);

  return cards;
};

module.exports = {
  getDeckCards
};