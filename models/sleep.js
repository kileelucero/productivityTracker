module.exports = function(sequelize, DataTypes) {
    const Sleep = sequelize.define("Sleep", {
        sleep_name: DataTypes.STRING,
        sleep_hours: DataTypes.INTEGER,
        sleep_mins: DataTypes.INTEGER
    });
    return Sleep;
  };