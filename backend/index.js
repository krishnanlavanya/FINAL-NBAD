const express = require('express');
const router = express.Router();
const refreshCtrl = require('./refresh.controller')
router.post('/refresh',refreshCtrl.refresh)
module.exports = router;