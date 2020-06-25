'use strict';
module.exports = (sequelize, DataTypes) => {
  const es_person = sequelize.define('es_person', {
    per_uid: DataTypes.UUID,
    per_first_name: DataTypes.STRING,
    per_second_name: DataTypes.STRING,
    per_first_lastname: DataTypes.STRING,
    per_second_lastname: DataTypes.STRING,
    per_doc_id: DataTypes.INTEGER,
    per_doc_id_ext: DataTypes.INTEGER,
    per_doc_id_comp: DataTypes.INTEGER,
    per_home_address: DataTypes.STRING,
    per_mail: DataTypes.STRING,
    per_home_phone: DataTypes.STRING,
    per_cellphone: DataTypes.STRING,
    per_birthday: DataTypes.DATE,
    par_type_doc_id: DataTypes.INTEGER,
    par_sex_id: DataTypes.INTEGER,
    par_nacionality_id: DataTypes.INTEGER,
    par_country_id: DataTypes.INTEGER,
    per_city_id: DataTypes.INTEGER,
    per_origin_id: DataTypes.INTEGER,
    per_status: DataTypes.STRING,
    per_status_id: DataTypes.INTEGER
  }, {
    tableName: 'es_person'
  });
  es_person.associate = function(models) {
    // associations can be defined here
  };
  return es_person;
};
