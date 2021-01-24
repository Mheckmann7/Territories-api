const express = require('express');
const router = express.Router();
const areasCtrl = require('../../controllers/areas');

router.get('/', areasCtrl.getAreas);
router.get('/playerAreas', areasCtrl.getPlayersAreas);
router.post('/', areasCtrl.createAreas);

module.exports = router;