const router = require('express').Router();
const userRoute = require('./userRoute');
const addressRoute = require('./addressRoute');
const { route } = require('./userRoute');

router.use([userRoute,
            addressRoute]);

module.exports = router;