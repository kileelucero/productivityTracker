module.exports = function(sequelize, DataTypes) {
    const Working = sequelize.define("Working", {
        working_name: DataTypes.STRING,
        working_hours: DataTypes.INTEGER,
        working_mins: DataTypes.INTEGER
    });
    return Working;
  };