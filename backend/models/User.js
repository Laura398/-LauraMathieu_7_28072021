'use strict';

const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Post, { onDelete: 'cascade' }),
      models.User.hasMany(models.Comment, { onDelete: 'cascade' })
    }
  };
  
  User.init({
    lastName: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        isUnique(value) {
          
          return User.findOne({where:{email:value}})
            .then((email) => {
              if (email) {
                throw new Error('Validation error: email already exist');
              }
            })
        }
      }
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const hash = bcrypt.hashSync(value, 10);
        this.setDataValue('password', hash);
      },
    },
    bio: DataTypes.STRING,
    birthday: { type: DataTypes.STRING, isDate: true },
    picture: DataTypes.STRING,
    isAdmin: { type: DataTypes.BOOLEAN, allowNull: false }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};