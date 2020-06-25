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
      usr_pwd_change: {
        type: Sequelize.INTEGER
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
      usr_status: {
        type: Sequelize.STRING
      },
      usr_status_id: {
        type: Sequelize.INTEGER
      },
      usr_due_date: {
        type: Sequelize.DATE
      },
      usr_rol_id: {
        type: Sequelize.INTEGER
      },
      usr_rol: {
        type: Sequelize.STRING
      },
      usr_person_id: {
        type: Sequelize.INTEGER
      },
      usr_person: {
        type: Sequelize.STRING
      },
      usr_img_id: {
        type: Sequelize.INTEGER
      },
      usr_img: {
        type: Sequelize.STRING
      },
      usr_last_login: {
        type: Sequelize.DATE
      },
      modifiedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dueAt: {
        allowNull: false,
        type: Sequelize.DATE
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
