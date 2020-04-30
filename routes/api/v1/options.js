//impoting libraries
const express = require('express');
const router = express.Router();
const optionController = require('../../../controllers/api/v1/options_controller');

//routes for corresponding api
router.delete('/:id/delete', optionController.destroy);
router.post('/:id/add_vote', optionController.addVote);

module.exports = router;