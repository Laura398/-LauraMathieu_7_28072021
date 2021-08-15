const { User } = require ('../models');

// Create a user
exports.createUser = (req, res, next) => {
    const user = new User({
        ...req.body,
        isAdmin: 0
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
};

// Get all users
exports.getAllUsers = async (req, res, next) => {
    User.findAll()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
};

// Get one user
exports.getOneUser = (req, res, next) => {
    User.findOne(({ where: { id: req.params.id }}))
      .then(user => res.status(200).json(user))
      .catch(error => res.status(404).json({ error }));
};

// Modify one user
exports.updateUser = (req, res, next) => {
    try {
        const updateUser = User.update({ ...req.body },
                                    {where: {id: req.params.id}})
                                    res.status(201).json({ message: 'Objet enregistré !'})
        if (!updateUser) throw ('Error while Updating');
        res(user).code(200);
    } catch (error) {
        res.send(error)
    }
};

// Delete one user
exports.deleteUser = (req, res, next) => {
    User.destroy({ where: { id: req.params.id }})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
};