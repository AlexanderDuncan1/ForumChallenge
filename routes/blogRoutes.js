const router = require('express').Router();
const blogController = require('../controllers/blogController');

router.get('/articles', blogController.getArticles);
router.get('/articles/:id', blogController.getArticle);
router.post('/articles', blogController.createArticle);
router.put('/articles/:id', blogController.updateArticle);
router.delete('/articles/:id', blogController.deleteArticle);

module.exports = router;