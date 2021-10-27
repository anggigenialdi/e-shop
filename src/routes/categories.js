
const express = require('express');
const router = express.Router();


const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.getCategory);
router.post('/', categoryController.postCategory)



module.exports =router;