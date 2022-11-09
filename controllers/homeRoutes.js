const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('homepage', data )
})

router.get('/museum', (req, res) => {
    res.render('museum')
})


module.exports = router