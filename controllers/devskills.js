const Skill = require('../models/devskills')

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('devskills/index', {
        devSkills: Skill.getAll()
    });
};

function show(req, res) {
    res.render('devskills/show', {
        skill: Skill.getOne(req.params.id),
    });
};