const express = require('express')
const mongojs = require('mongojs')

const router = express.Router()
// Uncomment the bottom line and enter the DB url in the ''
// const db = mongojs('')

router.get('/', (req, res, next) => {
	res.render('index.html')
})

module.exports = router
