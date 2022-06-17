const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
    itemName: {
        type: String
    },
    createdBy: {
        type: String,
        default: "Standard Item"
    },
    itemDescription: {
        type: String
    },
    requiresAttunement: {
        type: Boolean
    },
    hiddenItemDescription: {
        type: String
    }
});

const Item = model('Item', ItemSchema);

module.exports = Item;