'use strict';

module.exports = function (sequelize, DataTypes) {
  var book = sequelize.define('book', {
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  book.associate = function (models) {// associations can be defined here
  };

  return book;
};
//# sourceMappingURL=book.js.map