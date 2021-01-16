module.exports = function(sequelize, DataTypes) {
    const Other = sequelize.define("Other", {
        other_name: DataTypes.STRING,
        other_hours: DataTypes.INTEGER,
        other_mins: DataTypes.INTEGER
    });
    return Other;
  };