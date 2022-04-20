var express = require('express');
var router = express.Router();

// Require the controller that exports Dev Skills CRUD functions
const devSkillsCtrl = require('../controllers/devskills');

// All actual paths start with "/devskills"

// GET /devskills
router.get('/', devSkillsCtrl.index);
router.get('/new', devSkillsCtrl.new);
router.get('/:id', devSkillsCtrl.show);
router.post('/', devSkillsCtrl.create);
router.delete('/:id', devSkillsCtrl.delete);

module.exports = router;
