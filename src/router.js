const express = require('express');

const router = express.Router();

const cardsController = require('./controllers/cardsController');
const decksController = require('./controllers/decksController');
const classesController = require('./controllers/classesController');
const usersController = require('./controllers/usersController');
const classUsers = require('./controllers/classUsersController');
const difficultyCardsStudent = require('./controllers/difficultyCardsStudentController');

const cardsMiddleware = require('./middlewares/cardsMiddleware');
const decksMiddleware = require('./middlewares/decksMiddleware');
const classesMiddleware = require('./middlewares/classesMiddleware');
const usersMiddleware = require('./middlewares/usersMiddleware');

router.get('/cards', cardsController.getAll);
router.get('/cards/:id', cardsController.getCardsDeck);
router.post('/cards', cardsMiddleware.validateBody, cardsController.createCard);
router.delete('/cards/:id', cardsController.deleteCard);
router.put('/cards/:id',cardsMiddleware.validateBody, cardsController.updateCard);

router.get('/decks', decksController.getAll);
router.get('/decks/:id', decksController.getDecksUser);
router.post('/decks', decksMiddleware.validateBody, decksController.createDeck);
router.delete('/decks/:id', decksController.deleteDeck);
router.put('/decks/:id', decksMiddleware.validateBody, decksController.updateDeck);

router.get('/classes', classesController.getAll);
router.post('/classes', classesMiddleware.validateBody ,classesController.createClass);
router.delete('/classes/:id', classesController.deleteClass);
router.put('/classes/:id', classesMiddleware.validateBody, classesController.updateClass);

router.get('/users', usersController.getAll);
router.post('/users', usersMiddleware.validateBody ,usersController.createUser);
router.delete('/users/:id', usersController.deleteUser);
router.put('/users/:id', usersMiddleware.validateBody, usersController.updateUser);

router.get('/difficultyCardsStudent/:id_user', difficultyCardsStudent.getDifficultyCards);
router.post('/difficultyCardsStudent/', difficultyCardsStudent.createDifficultyCardStudent);

router.post('/classUsers', classUsers.setUserClass);

module.exports = router;