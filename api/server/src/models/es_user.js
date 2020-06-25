'use strict';
module.exports = (sequelize, DataTypes) => {
  const es_user = sequelize.define('es_user', {
    usr_uid: DataTypes.UUID,
    usr_login: DataTypes.STRING,
    usr_pwd: DataTypes.STRING,
    usr_pwd_change: DataTypes.INTEGER,
    usr_mail: DataTypes.STRING,
    usr_name: DataTypes.STRING,
    usr_lastname: DataTypes.STRING,
    usr_status: DataTypes.STRING,
    usr_status_id: DataTypes.INTEGER,
    usr_due_date: DataTypes.DATE,
    usr_rol_id: DataTypes.INTEGER,
    usr_rol: DataTypes.STRING,
    usr_last_login: DataTypes.DATE,
    usr_person_id: DataTypes.INTEGER,
    usr_person: DataTypes.STRING,
    usr_img_id: DataTypes.INTEGER,
    usr_img: DataTypes.STRING
  }, {});
  es_user.associate = function(models) {
    // associations can be defined here
  };
  return es_user;
};
