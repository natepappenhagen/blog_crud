const express		= require('express');
const router		= express.Router();
const User			= require('../models/users');

router.get('/', (req,res) => {
	res.render('auth/login.ejs')
});


module.exports = router;