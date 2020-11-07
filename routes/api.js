const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/portfolio', async (req, res) => {
  let projects = await db.Project.findAll({include: { model: db.Skill }})
  let projectsArr = [];
  projects.map(project => {
    let projectInfo = {
      id: project.dataValues.id,
      name: project.dataValues.name,
      description: project.dataValues.description,
      deployedLink: project.dataValues.deployedLink,
      skills: [],
    }

    project.dataValues.Skills.map(skill => {
      projectInfo.skills.push(skill.dataValues.name);
    })

    projectsArr.push(projectInfo)
  })
  res.render('portfolio', { title: 'Portfolio', projectsArr });
})

module.exports = router;