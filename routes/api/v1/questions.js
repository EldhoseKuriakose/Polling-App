//impoting libraries
const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/api/v1/questions_controller');

//routes to corresponding api
router.get('/:id', questionController.getQuestion);
router.post('/create', questionController.createQuestion);
router.delete('/:id/delete', questionController.destroy);
router.post('/:id/options/create', questionController.createOption);


module.exports = router;