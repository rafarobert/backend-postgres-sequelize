'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('es_person', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      per_uid: {
        type: Sequelize.UUID
      },
      per_first_name: {
        type: Sequelize.STRING
      },
      per_second_name: {
        type: Sequelize.STRING
      },
      per_first_lastname: {
        type: Sequelize.STRING
      },
      per_second_lastname: {
        type: Sequelize.STRING
      },
      per_doc_id: {
        type: Sequelize.INTEGER
      },
      per_doc_id_ext: {
        type: Sequelize.INTEGER
      },
      per_doc_id_comp: {
        type: Sequelize.INTEGER
      },
      per_home_address: {
        type: Sequelize.STRING
      },
      per_mail: {
        type: Sequelize.STRING
      },
      per_home_phone: {
        type: Sequelize.STRING
      },
      per_cellphone: {
        type: Sequelize.STRING
      },
      per_birthday: {
        type: Sequelize.DATE
      },
      par_type_doc_id: {
        type: Sequelize.INTEGER
      },
      par_sex_id: {
        type: Sequelize.INTEGER
      },
      par_nacionality_id: {
        type: Sequelize.INTEGER
      },
      par_country_id: {
        type: Sequelize.INTEGER
      },
      per_city_id: {
        type: Sequelize.INTEGER
      },
      per_origin_id: {
        type: Sequelize.INTEGER
      },
      per_status: {
        type: Sequelize.STRING
      },
      per_status_id: {
        type: Sequelize.INTEGER
      },
      modifiedBy: {
        type: Sequelize.INTEGER
      },
      updatedBy: {
        type: Sequelize.INTEGER
      },
      dueAt: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('es_person');
  }
};
