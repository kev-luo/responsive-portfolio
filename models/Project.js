module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define("Project", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  })

  Project.associate = function(models) {
    Project.belongsToMany(models.Skill, { through: 'ProjectSkills', as: 'skill', foreignKey: 'ProjectId' })
  }
  return Project;
}