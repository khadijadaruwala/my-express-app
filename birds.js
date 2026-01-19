const express = require('express')
const router = express.Router()

//middleware to this specific router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}

router.use(timeLog)

// Define home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
})

// Define the about route
router.get('/about', (req, res) => {
    res.send('About Birds')
})

module.exports = router