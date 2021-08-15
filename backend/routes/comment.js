const express = require('express');
const router = express.Router();

const { Comment } = require ('../models');

// Create a comment
router.post('/', (req, res, next) => {
const comment = new Comment({
    ...req.body
    });
    comment.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

// Get all comments for 1 post
router.get('/', (req, res, next) => {
    Comment.findAll({
        include: { all: true, nested: true },
      })
      .then(comments => res.status(200).json(comments))
      .catch(error => res.status(400).json({ error }));
});

// Get one comment
router.get('/:id', (req, res, next) => {
    Comment.findOne({
        include: { all: true, nested: true },
        where: { id: req.params.id }})
      .then(comment => res.status(200).json(comment))
      .catch(error => res.status(404).json({ error }));
});

// Modify one comment
router.put('/:id', (req, res, next) => {
    try {
        const updateComment = Comment.update({ ...req.body },
                                    {where: {id: req.params.id}})
                                    res.status(201).json({ message: 'Objet enregistré !'})
        if (!updateComment) throw ('Error while Updating');
        res(comment).code(200);
    } catch (error) {
        res.send(error)
    }
});

// Delete one comment
router.delete('/:id', (req, res, next) => {
    Comment.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

module.exports = router;