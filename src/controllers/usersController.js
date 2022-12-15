const usersModel = require('../models/usersModel');

const getAll = async (_request, response) => {
  
  const [users] = await usersModel.getAll();

  return response.status(200).json(users);
};

const createUser= async (request, response) => {
  const createdUser = await usersModel.createUser(request.body);
  
  return response.status(201).json(createdUser);
};

const deleteUser = async (request, response) => {
  const { id } = request.params;

  await usersModel.deleteUser(id);
  
  return response.status(204).json();
};

const updateUser = async (request, response) => {
  const { id } = request.params;

  await usersModel.updateUser(id, request.body);
  
  return response.status(204).json();
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  updateUser
};