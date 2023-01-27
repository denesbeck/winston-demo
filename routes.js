const express = require('express');
const router = express.Router();

const { error, warn, success, start, login, param, info } = require('./controller');

router.get('/error', error);
router.get('/warn', warn);
router.get('/success', success);
router.get('/start', start);
router.get('/login', login);
router.get('/param', param);
router.get('/info', info);

module.exports = router;
