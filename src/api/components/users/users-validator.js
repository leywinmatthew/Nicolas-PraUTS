const joi = require('joi');
const { updateUserPassword } = require('./users-controller');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      confirmPassword: joi.string().min(6).max(32).required().label('Password'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  updateUserPassword: {
    body: {
      password: joi.string().min(6).max(32).required().label('Password'),
      newPassword: joi.string().min(6).max(32).required().label('Password'),
      confirmPassword: joi.string().min(6).max(32).required().label('Password'),
    },
  },
};