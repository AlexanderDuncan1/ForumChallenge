const router = require('express').Router();
const { Opinion } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const opinionData = await Opinion.findAll();
    res.status(200).json(opinionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;