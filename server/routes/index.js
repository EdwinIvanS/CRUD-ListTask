var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiControllers')

/* GET home page. */
router.get('/employes', apiController.employes );
router.get('/employees/:id', apiController.consultId);
router.post('/employes', apiController.insert );
router.delete('/employees/:id', apiController.delete);
router.put('/employees/:id', apiController.update);


module.exports = router;
