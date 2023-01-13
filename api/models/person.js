'use strict';

module.exports = (sequelize, DataTypes) => {
  const people = sequelize.define('people', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  people.associate = function(models) {
    // associations can be defined here
  };
  return people;
};