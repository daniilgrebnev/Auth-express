const Router = require('express')
const router = new Router()
const controler = require('./authController')
const { check } = require('express-validator')

router.post(
	'/registration',
	[
		check('username', 'Username not be empty').notEmpty(),
		check(
			'password',
			'password can be no less than 4 characters and no more than 20'
		).isLength({ min: 4, max: 20 }),
	],
	controler.registration
)
router.post('/login', controler.login)
router.get('/users', controler.getUser)

module.exports = router
