const { User } = require ('../models');
const { Post } = require ('../models');

// Create a post
exports.createPost = (req, res, next) => {
    const post = new Post({
        ...req.body
        });
        post.save()
            .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
            .catch(error => res.status(400).json({ error }));
};

// Get all posts
exports.getAllPosts = async (req, res, next) => {
    Post.findAll({ include: User })
      .then(posts => res.status(200).json(posts))
      .catch(error => res.status(400).json({ error }));
};

// Get one post
exports.getOnePost = (req, res, next) => {
    Post.findOne({ include: User, where: { id: req.params.id }})
      .then(post => res.status(200).json(post))
      .catch(error => res.status(404).json({ error }));
};

// Modify one post
exports.updatePost = (req, res, next) => {
    try {
        const updatePost = Post.update({ ...req.body },
                                    {where: {id: req.params.id}})
                                    res.status(201).json({ message: 'Objet enregistré !'})
        if (!updatePost) throw ('Error while Updating');
        res(post).code(200);
    } catch (error) {
        res.send(error)
    }
};

// Delete one post
exports.deletePost = (req, res, next) => {
    Post.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
};