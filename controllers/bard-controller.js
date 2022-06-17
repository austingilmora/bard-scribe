const { Bard } = require('../models');

const bardController = {

    getAllBards(req, res) {
        Bard.find({})
            .then(dbBardData => res.json(dbBardData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getBardById({ params }, res) {
        Bard.findOne({ _id: params.id })
            .then(dbBardData => {
                if (!dbBardData) {
                    res.status(404).json({ message: 'No Bard found with this id!'});
                    return;
                }
                res.json(dbBardData);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    },
    createBard({ body }, res) {
        Bard.create(body)
            .then(dbBardData => res.json(dbBardData))
            .catch(err => res.status(400).json(err));
    },
    updateBard({ params, body }, res) {
        Bard.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbBardData => {
                if (!dbBardData) {
                    res.status(404).json({ message: 'No bard found with this id!'});
                    return;
                }
                res.json(dbBardData)
            })
            .catch(err => res.status(400).json(err));
    },
    deleteBard({ params }, res) {
        Bard.findOneAndDelete({ _id: params.id })
            .then(dbBardData => {
                if (!dbBardData) {
                    res.status(404).json({ message: 'No bard found with this id!' });
                    return;
                }
                res.json(dbBardData);
            })
            .catch(err => res.status(400).json(err));
    }
}

module.exports = bardController;