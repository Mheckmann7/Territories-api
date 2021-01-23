const express = require('express');
const router = express.Router();
const areasCtrl = require('../../controllers/areas');

router.get('/', areasCtrl.getAreas);
router.post('/', areasCtrl.createAreas);

module.exports = router;