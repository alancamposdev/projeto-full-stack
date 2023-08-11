const express = require('express');
const router = express.Router();

const cidadesController = require('../controllers/cidadesController');

router.get('/cidades', cidadesController.getAll);
router.get('/cidades/:id', cidadesController.getById);
router.post('/cidades', cidadesController.create);  
router.put('/cidades/:id', cidadesController.update);
router.delete('/cidades/:id', cidadesController.delete);

module.exports = router;