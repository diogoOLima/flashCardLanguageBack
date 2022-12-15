const connection = require('./connection');

const getAll = async () => {
  const users = await connection.execute('SELECT * FROM users');

  return users;
};

const createUser = async (user) => {
  const {nome, dataNascimento, isAdmin} = user;

  const query = 'INSERT INTO users(nome, dataNascimento, isAdmin) VALUES (?, ?, ?)';

  const [createdUser] = await connection.execute(query, [nome, dataNascimento, isAdmin]);

  return {createdUserId: createdUser.insertId};
};

const deleteUser = async (id) => {
  await connection.execute('DELETE FROM users WHERE id = ?', [id]);
};
  
const updateUser = async (id, user) => {
  const {nome, dataNascimento, isAdmin} = user;
  
  const query = 'UPDATE cards SET fraseIng = ?, frasePort = ? WHERE id = ?';
  
  await connection.execute(query, [nome, dataNascimento, isAdmin]);
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  updateUser
};