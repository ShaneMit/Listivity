const router = require('express').Router();

router.use('/api', require('./userRoutes.js'));
router.use('/api', require('./activityRoutes.js'));
router.use('/api', require('./eatRoutes.js'));
router.use('/api', require('./entertainRoutes'));

module.exports = router