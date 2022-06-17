const router = require('express').Router();
const bardRoutes = require('./bard-routes');
const itemRoutes = require('./item-routes')

router.use('/bards', bardRoutes);
router.use('/items', itemRoutes)

module.exports = router;