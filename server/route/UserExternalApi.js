const express = require('express');
const router = express.Router();

const userExternalApiController = require('../controller/UserExternalApi');
router.get('/getUser', userExternalApiController.getUser);
router.post('/updateUser', userExternalApiController.updateUser);


module.exports = router;