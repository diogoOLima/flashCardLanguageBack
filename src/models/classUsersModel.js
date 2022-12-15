const connection = require('./connection');

const setClassUser = async (userClass) => {
  const {user_id, class_id} = userClass;

  const query = 'INSERT INTO alunosDaTurma(user_id, class_id) VALUES (?, ?);';

  const [createdClassUser] = await connection.execute(query, [user_id, class_id]);

  return {createdClassUser: createdClassUser.insertId};
};

module.exports = {
  setClassUser
};