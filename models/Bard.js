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
    },
    hitPoints: {
        type: Number
    },
    strength: {
        type: Number
    },
    dexterity: {
        type: Number
    },
    constitution: {
        type: Number
    },
    intelligence: {
        type: Number
    },
    wisdom: {
        type: Number
    },
    charisma: {
        type: Number
    },
    weapons: [],
    equipment: [],
    
});

const Bard = model('Bard', BardSchema);

module.exports = Bard;