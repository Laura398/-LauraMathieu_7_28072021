const { Comment } = require ('../models');

// Create a comment
exports.createComment = (req, res, next) => {
    const comment = new Comment({
        ...req.body
        });
        comment.save()
            .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
            .catch(error => res.status(400).json({ error }));
};

// Get all comments for 1 post
exports.getAllComments = async (req, res, next) => {
    Comment.findAll({
        include: { all: true, nested: true },
      })
      .then(comments => res.status(200).json(comments))
      .catch(error => res.status(400).json({ error }));
};

// Get one comment
exports.getOneComment = (req, res, next) => {
    Comment.findOne({
        include: { all: true, nested: true },
        where: { id: req.params.id }})
      .then(comment => res.status(200).json(comment))
      .catch(error => res.status(404).json({ error }));
};

// Modify one comment
exports.updateComment = (req, res, next) => {
    try {
        const updateComment = Comment.update({ ...req.body },
                                    {where: {id: req.params.id}})
                                    res.status(201).json({ message: 'Objet enregistré !'})
        if (!updateComment) throw ('Error while Updating');
        res(comment).code(200);
    } catch (error) {
        res.send(error)
    }
};

// Delete one comment
exports.deleteComment = (req, res, next) => {
    Comment.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
};