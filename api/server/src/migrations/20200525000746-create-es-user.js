'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('es_user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usr_uid: {
        type: Sequelize.UUID
      },
      usr_login: {
        type: Sequelize.STRING
      },
      usr_pwd: {
        type: Sequelize.STRING
      },
      usr_mail: {
        type: Sequelize.STRING
      },
      usr_name: {
        type: Sequelize.STRING
      },
      usr_lastname: {
        type: Sequelize.STRING
      },
      usr_status_id: {
        type: Sequelize.INTEGER
      },
      usr_person_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {tableName:'es_person'},
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('es_user');
  }
};
