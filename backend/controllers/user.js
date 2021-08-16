// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

// API
exports.signup = (req, res, next) => {
    const user = new User({
        ...req.body,
        isAdmin: 0
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email }})
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
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