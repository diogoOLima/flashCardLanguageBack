const validateBody = (request, response, next) => {
  if(request.body.nome === undefined){
    return response.status(400).json({message: 'The field "nome" is required'});
  }
  if(request.body.nome === ''){
    return response.status(400).json({message: 'The field "nome" cannot be empty'});
  }

  next();
};

module.exports = {
  validateBody
};