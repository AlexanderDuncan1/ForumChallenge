const router = require('express').Router();
const { Blog, Author } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        author_id: req.session.author_id,
      },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('dashboard', { blogs, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', { logged_in: req.session.logged_in });
});

module.exports = router;