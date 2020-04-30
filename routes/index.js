const express = require('express');

//Setting up express router
const router = express.Router();

const questionRouter = require('./api/v1/questions');
const optionRouter = require('./api/v1/options');

router.use('/questions', questionRouter);
router.use('/options', optionRouter);

module.exports = router;