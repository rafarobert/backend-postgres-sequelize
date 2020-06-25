'use strict';
module.exports = (sequelize, DataTypes) => {
  const es_user = sequelize.define('es_user', {
    usr_uid: DataTypes.UUID,
    usr_login: DataTypes.STRING,
    usr_pwd: DataTypes.STRING,
    usr_mail: DataTypes.STRING,
    usr_name: DataTypes.STRING,
    usr_lastname: DataTypes.STRING,
    usr_status_id: DataTypes.INTEGER,
    usr_person_id: DataTypes.INTEGER,

  }, {
    tableName: 'es_user'
  });
  es_user.associate = function(models) {
    // associations can be defined here
    models.es_user.belongsTo(models.es_person,{foreignKey:'usr_person_id'});
    models.es_person.hasMany(models.es_user,{foreignKey:'usr_person_id'});
  };
  return es_user;
};
