const router = require('express').Router();
const {
    getAllBards,
    getBardById,
    createBard,
    updateBard,
    deleteBard
} = require('../../controllers/bard-controller')

router
    .route('/')
    .get(getAllBards)
    .post(createBard)

router
    .route('/:id')
    .get(getBardById)
    .put(updateBard)
    .delete(deleteBard);

module.exports = router;