const connection = require('./connection');

const getAll = async () => {
  const [classes] = await connection.execute('SELECT * FROM classes');

  return classes;
};

const createClass = async (classe) => {
  const { nome } = classe;

  const query = 'INSERT INTO classes(nome) VALUES (?)';
  const [createdClass] = await connection.execute(query, [nome]); 

  return {createdClassId: createdClass.insertId};
};

const deleteClass = async (id) => {
  await connection.execute('DELETE FROM classes WHERE id = ?', [id]);
};

const updateClass = async (id, classe) => {
  const { nome } = classe;
  
  const query = 'UPDATE classes SET nome = ? WHERE id = ?';
  await connection.execute(query, [nome, id]);
};

module.exports = {
  getAll,
  createClass,
  deleteClass,
  updateClass
};