const express = require('express');
const router = express.Router();

const { User } = require ('../models');
const { Post } = require ('../models');

// Create a post
router.post('/', (req, res, next) => {
const post = new Post({
    ...req.body
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

// Get all posts
router.get('/', (req, res, next) => {
    Post.findAll({ include: User })
      .then(posts => res.status(200).json(posts))
      .catch(error => res.status(400).json({ error }));
});

// Get one post
router.get('/:id', (req, res, next) => {
    Post.findOne({ include: User, where: { id: req.params.id }})
      .then(post => res.status(200).json(post))
      .catch(error => res.status(404).json({ error }));
});

// Modify one post
router.put('/:id', (req, res, next) => {
    try {
        const updatePost = Post.update({ ...req.body },
                                    {where: {id: req.params.id}})
                                    res.status(201).json({ message: 'Objet enregistré !'})
        if (!updatePost) throw ('Error while Updating');
        res(post).code(200);
    } catch (error) {
        res.send(error)
    }
});

// Delete one post
router.delete('/:id', (req, res, next) => {
    Post.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

module.exports = router;