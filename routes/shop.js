const express = require('express');
const router = express.Router();
const {getAllShops, createShop, getShop, updateShop, deleteShop} = require('../controllers/shop');

router.route('/').get(getAllShops).post(createShop);
router.route('/:email').get(getShop).patch(updateShop).delete(deleteShop);

module.exports = router;