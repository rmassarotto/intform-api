const { Router } = require('express');
const router = Router()
const controller = require('../controllers/default');
const { Tipo } = require('../models');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const tipos = await controller.get(id, Tipo)
  res.send(tipos || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const tipo = await controller.save(body, Tipo);

    res.send(tipo)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const tipo = await controller.edit(id, body, Tipo)

    res.send(tipo);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, Tipo);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router