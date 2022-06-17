const { Item, Bard } = require('../models');

const itemController = {
    addItem({ params, body }, res) {
        console.log(body);
        Item.create(body)
            .then(({ _id }) => {
                return Bard.findOneAndUpdate(
                    { _id: params.bardId },
                    { $push: { items: _id } },
                    { new: true }
                );
            })
            .then(dbBardData => {
                if (!dbBardData) {
                    res.status(404).json({ message: 'No bard found with this id!'});
                    return;
                }
                res.json(dbBardData);                
            })
            .catch(err => res.json(err))
    },
    removeItem({ params }, res) {
        Item.findOneAndDelete({ _id: params.itemId })
            .then(deletedItem => {
                if (!deletedItem) {
                    return res.status(404).json({ message: 'No item found with this id'});
                }
                return Bard.findOneAndUpdate(
                    { _id: params.bardId},
                    { $pull: { items: params.itemId }},
                    { new: true }
                );
            })
            .then(dbBardData => {
                if (!dbBardData) {
                    res.status(404).json({ message: 'No Bard found with this id!' });
                    return;
                }
                res.json(dbBardData)
            })
            .catch(err => res.json(err))
    }
};

module.exports = itemController;