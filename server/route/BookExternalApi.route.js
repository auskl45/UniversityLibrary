const express = require('express');
const router = express.Router();

const externalApiRouter = require('../controller/BookExternalApi');
//BOOKS
router.post('/getBook', externalApiRouter.getBook);
router.post('/recoverBook', externalApiRouter.recoverBook);
router.delete('/deleteBook/:idBook', externalApiRouter.deleteBook);
router.post('/modifyBook/:idBook',externalApiRouter.modifyBook);
router.post('/createBook',externalApiRouter.createBook);
router.post('/recover-universalBook', externalApiRouter.recoverUniversalBook);


module.exports = router;