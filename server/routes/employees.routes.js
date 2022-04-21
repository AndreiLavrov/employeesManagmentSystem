const Router = require('express');
const router = new Router();

const fileController = require('../controllers/fileController.js');

router.get('', fileController.getEmployees);
router.patch('', fileController.changeEmployeeType);
router.post('', fileController.addEmployee);

module.exports = router;
