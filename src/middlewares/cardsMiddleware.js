const validateBody = (request, response, next) => {
  const { body } = request;

  if (body.fraseIng === undefined) {
    return response.status(400).json({ message: 'The field "fraseIng" is required' });
  }

  if (body.fraseIng === '') {
    return response.status(400).json({ message: 'The field "fraseIng" cannot be empty' });
  }

  if (body.frasePort === undefined) {
    return response.status(400).json({ message: 'The field "frasePort" is required' });
  }

  if (body.frasePort === '') {
    return response.status(400).json({ message: 'The field "frasePort" cannot be empty' });
  }
  
  next(); // significa que esse middleware terminou e pode pular para o proximo onde esse metodo foi chamado
};

module.exports = {
  validateBody,
};