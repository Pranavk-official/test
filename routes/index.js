const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shopController');

/* GET home page. */
router.get('/', shopController.getHome);

module.exports = router;
