const validateBody = (request, response, next) => {
  const { body } = request;

  if (body.nome === undefined) {
    return response.status(400).json({ message: 'The field "nome" is required' });
  }

  if (body.nome === '') {
    return response.status(400).json({ message: 'The field "nome" cannot be empty' });
  }

  if (body.dataNascimento === undefined) {
    return response.status(400).json({ message: 'The field "dataNascimento" is required' });
  }

  if (body.dataNascimento === '') {
    return response.status(400).json({ message: 'The field "dataNascimento" cannot be empty' });
  }

  if (body.isAdmin === undefined) {
    return response.status(400).json({ message: 'The field "isAdmin" is required' });
  }  

  if (body.isAdmin === '') {
    return response.status(400).json({ message: 'The field "isAdmin" cannot be empty' });
  }

  next(); // significa que esse middleware terminou e pode pular para o proximo onde esse metodo foi chamado
};

module.exports = {
  validateBody
};