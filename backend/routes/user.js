const express = require('express');
const router = express.Router();

// API
const { User } = require ('../models');

// Create a user
router.post('/', (req, res, next) => {
    const user = new User({
        ...req.body,
        isAdmin: 0
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

// Get all users
router.get('/', (req, res, next) => {
    User.findAll()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
});

// Get one user
router.get('/:id', (req, res, next) => {
    User.findOne(({ where: { id: req.params.id }}))
      .then(user => res.status(200).json(user))
      .catch(error => res.status(404).json({ error }));
});

// Modify one user
router.put('/:id', (req, res, next) => {
    try {
        const updateUser = User.update({ ...req.body },
                                    {where: {id: req.params.id}})
                                    res.status(201).json({ message: 'Objet enregistré !'})
        if (!updateUser) throw ('Error while Updating');
        res(user).code(200);
    } catch (error) {
        res.send(error)
    }
});

// Delete one user
router.delete('/:id', (req, res, next) => {
    User.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

module.exports = router;