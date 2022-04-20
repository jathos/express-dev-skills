const devSkills = [
    { id: 125223, skill: 'CSS', proficiency: 2 },
    { id: 127904, skill: 'JavaScript', proficiency: 4 },
    { id: 139608, skill: 'Express', proficiency: -9 }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return devSkills;
};

function getOne(id) {
    id = parseInt(id);
    return devSkills.find(skill => skill.id === id);
};

function create(skill) {
    skill.id = Date.now() % 100000;
    skill.proficiency = 1;
    devSkills.push(skill);
};

function deleteOne(id) {
    const idx = devSkills.findIndex(skill => skill.id === parseInt(id));
    devSkills.splice(idx, 1);
};