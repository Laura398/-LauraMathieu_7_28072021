const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

const db = require('./models');

db.sequelize.sync().then((req) => {
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
});

const { User } = require ('./models');
const { Post } = require ('./models');
const { Comment } = require ('./models');


// Create a user
app.post('/api/user', (req, res, next) => {
    const user = new User({
        ...req.body,
        isAdmin: 0
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

 // Create a post
app.post('/api/post', (req, res, next) => {
const post = new Post({
    ...req.body
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

 // Create a comment
 app.post('/api/comment', (req, res, next) => {
    const comment = new Comment({
        ...req.body
        });
        comment.save()
            .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
            .catch(error => res.status(400).json({ error }));
    });

// Get all users
app.get('/api/users', (req, res, next) => {
    User.findAll()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
});

// Get all posts
app.get('/api/posts', (req, res, next) => {
    Post.findAll({ include: User })
      .then(posts => res.status(200).json(posts))
      .catch(error => res.status(400).json({ error }));
});

// Get all comments for 1 post
app.get('/api/comments', (req, res, next) => {
Comment.findAll({
    include: { all: true, nested: true },
  })
  .then(comments => res.status(200).json(comments))
  .catch(error => res.status(400).json({ error }));
  });

// Get one user
app.get('/api/user/:id', (req, res, next) => {
    User.findOne(({ where: { id: req.params.id }}))
      .then(user => res.status(200).json(user))
      .catch(error => res.status(404).json({ error }));
  });

// Get one post
app.get('/api/post/:id', (req, res, next) => {
    Post.findOne({ include: User, where: { id: req.params.id }})
      .then(post => res.status(200).json(post))
      .catch(error => res.status(404).json({ error }));
  });

// Get one comment
app.get('/api/comment/:id', (req, res, next) => {
    Comment.findOne({
        include: { all: true, nested: true },
        where: { id: req.params.id }})
      .then(comment => res.status(200).json(comment))
      .catch(error => res.status(404).json({ error }));
  });

// Modify one user
app.put('/api/user/:id', (req, res, next) => {
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

// Modify one post
app.put('/api/post/:id', (req, res, next) => {
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

// Modify one comment
app.put('/api/comment/:id', (req, res, next) => {
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

// Delete one user
app.delete('/api/user/:id', (req, res, next) => {
    User.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

// Delete one post
app.delete('/api/post/:id', (req, res, next) => {
    Post.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

// Delete one comment
app.delete('/api/comment/:id', (req, res, next) => {
    Comment.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

app.use(bodyParser.json());

module.exports = app;