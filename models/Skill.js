module.exports = function(sequelize, DataTypes) {
  const Skill = sequelize.define("Skill", {
    name: DataTypes.STRING,
  })

  Skill.associate = function(models) {
    Skill.belongsToMany(models.Project, { through: 'ProjectSkills', as: 'project', foreignKey: 'SkillId' })
  }
  return Skill;
}