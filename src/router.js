const express = require('express');
const cardsController = require('./controllers/cardsController');

const router = express.Router();

router.get('/cards', cardsController.getAll);

module.exports = router;