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
      skills: [],
    }

    project.dataValues.Skills.map(skill => {
      projectInfo.skills.push(skill.dataValues.name);
    })

    projectsArr.push(projectInfo)
  })
  console.log(projectsArr);
  res.render('portfolio', { title: 'Portfolio', projectsArr });
})

// router.get('/project/:projectId', (req, res) => {
//   console.log(req.params.projectId);
//   res.render('portfolio', { title: 'portfolio' });
// })


module.exports = router;