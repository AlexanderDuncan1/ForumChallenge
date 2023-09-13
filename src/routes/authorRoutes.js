const router = require('express').Router();
const { Author } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const authorData = await Author.findAll();
    res.status(200).json(authorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;