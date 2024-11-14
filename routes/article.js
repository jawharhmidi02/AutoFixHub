const express = require('express');
const router = express.Router();
const {getAllArticles, createArticle, getArticle, getChiefArticles, updateArticle, deleteArticle } = require('../controllers/article');

router.route('/').get(getAllArticles).post(createArticle);
router.route('/byid/:id').get(getArticle).patch(updateArticle).delete(deleteArticle);
router.route('/byemail/:email').get(getChiefArticles);


module.exports = router;