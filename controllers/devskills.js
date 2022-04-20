const Skill = require('../models/devskills')

module.exports = {
    index,
    show,
    new: newDevSkill,
    create,
    delete: deleteDevSkill
};

function index(req, res) {
    res.render('devskills/index', {
        devSkills: Skill.getAll(),
        time: req.time
    });
};

function show(req, res) {
    res.render('devskills/show', {
        skill: Skill.getOne(req.params.id),
    });
};

function newDevSkill(req, res) {
    res.render('devskills/new');
};

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/devskills');
}

function deleteDevSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/devskills');
}