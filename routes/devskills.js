var express = require('express');
var router = express.Router();

// Require the controller that exports Dev Skills CRUD functions
const devSkillsCtrl = require('../controllers/devskills');

// All actual paths start with "/devskills"

// GET /devskills
router.get('/', devSkillsCtrl.index);
router.get('/:id', devSkillsCtrl.show);

module.exports = router;
