
const express = require('express');
const v1 = require('./version1.route');
const v2 = require('./version2.route');
// const swagger = require('./swagger.route');

const router = express.Router();

router.use('/api/v1/parse', v1);
router.use('/api/v2/parse', v2);
// router.use('/', swagger);

router.get('/', (req, res) => res.send('REST API'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;