const { Schema, model } = require('mongoose');

const BardSchema = new Schema({

    bardName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    race: {
        type: String
    }
});

const Bard = model('Bard', BardSchema);

module.exports = Bard;