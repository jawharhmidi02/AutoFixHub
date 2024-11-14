const express = require('express');
const router = express.Router();
const { getAllDevs, createDev, getDev, updateDev, deleteDev} = require('../controllers/dev');

router.route('/').get(getAllDevs).post(createDev);
router.route('/:username').get(getDev).patch(updateDev).delete(deleteDev);

module.exports = router;