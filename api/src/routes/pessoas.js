const express = require('express');
const router = express.Router();

const pessoasController = require('../controllers/pessoasController');

router.get('/pessoas', pessoasController.getAll);
router.get('/pessoas/:id', pessoasController.getById);  
router.post('/pessoas', pessoasController.create);
router.put('/pessoas/:id', pessoasController.update);
router.delete('/pessoas/:id', pessoasController.delete);

module.exports = router;
