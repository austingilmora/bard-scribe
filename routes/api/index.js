const router = require('express').Router();
const bardRoutes = require('./bard-routes');

router.use('/bards', bardRoutes);

module.exports = router;