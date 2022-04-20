const devSkills = [
    { id: 125223, skill: 'CSS', proficiency: 2 },
    { id: 127904, skill: 'JavaScript', proficiency: 4 },
    { id: 139608, skill: 'Express', proficiency: -9 }
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return devSkills;
};

function getOne(id) {
    id = parseInt(id);
    return devSkills.find(skill => skill.id === id);
};