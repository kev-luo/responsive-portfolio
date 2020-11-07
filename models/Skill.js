module.exports = function(sequelize, DataTypes) {
  const Skill = sequelize.define("Skill", {
    name: DataTypes.STRING,
  })

  Skill.associate = function(models) {
    Skill.belongsTo(models.Project)
  }
  return Skill;
}

