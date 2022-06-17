const router = require('express').Router();
const { addItem, removeItem } = require('../../controllers/item-controller');

router
    .route('/:bardId')
    .post(addItem);

router
    .route('/:bardId/:itemId')
    .delete(removeItem);

module.exports = router;