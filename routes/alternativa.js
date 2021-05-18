const { Router } = require('express');
const router = Router()
const controller = require('../controllers/default');
const { Alternativa } = require('../models');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const alternativas = await controller.get(id, Alternativa)
  res.send(alternativas || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const alternativa = await controller.save(body, Alternativa);

    res.send(alternativa)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const alternativa = await controller.edit(id, body, Alternativa)

    res.send(alternativa);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, Alternativa);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router