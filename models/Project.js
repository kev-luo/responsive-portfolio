module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define("Project", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  })

  Project.associate = function(models) {
    Project.hasMany(models.Skill)
  }
  return Project;
}