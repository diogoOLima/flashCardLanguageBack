const classesModel = require('../models/classesModel');

const getAll = async (_request, response) => {
  const classes = await classesModel.getAll();

  return response.status(200).json(classes);
};

const createClass = async (request, response) => {
  const createdClass = await classesModel.createClass(request.body);

  return response.status(201).json(createdClass);
};

const deleteClass = async (request, response) => {
  const { id } = request.params;

  await classesModel.deleteClass(id);

  return response.status(204).json();
};

const updateClass = async (request, response) => {
  const { id } = request.params;
  
  await classesModel.updateClass(id, request.body);

  return response.status(204).json();
};

module.exports = {
  getAll,
  createClass,
  deleteClass,
  updateClass
};