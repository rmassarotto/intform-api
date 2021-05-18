const { Router } = require('express');
const router = Router()
const controller = require('../controllers/default');
const { Categoria } = require('../models');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const categorias = await controller.get(id, Categoria)
  res.send(categorias || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const categoria = await controller.save(body, Categoria);

    res.send(categoria)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const categoria = await controller.edit(id, body, Categoria)

    res.send(categoria);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, Categoria);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router