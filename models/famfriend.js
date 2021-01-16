module.exports = function(sequelize, DataTypes) {
    const Famfriend = sequelize.define("Famfriend", {
        famfriend_name: DataTypes.STRING,
        famfriend_hours: DataTypes.INTEGER,
        famfriend_mins: DataTypes.INTEGER
    });
    return Famfriend;
  };