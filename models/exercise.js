module.exports = function(sequelize, DataTypes) {
    const Exercise = sequelize.define("Exercise", {
        exercise_name: DataTypes.STRING,
        exercise_hours: DataTypes.INTEGER,
        exercise_mins: DataTypes.INTEGER
    });
    return Exercise;
  };