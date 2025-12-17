const express = require('express');
const {createvalidationmiddleware} = require('../middlewares/user.middlewares')
const router = express.Router();
const {createfunc} = require('../controller/controller')

router.post("/create" , createvalidationmiddleware, createfunc)

module.exports = router