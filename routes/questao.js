const { Router } = require('express');
const router = Router()
const controller = require('../controllers/default');
const { Questao } = require('../models');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const questoes = await controller.get(id, Questao)
  res.send(questoes || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const questao = await controller.save(body, Questao);

    res.send(questao)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const questao = await controller.edit(id, body, Questao)

    res.send(questao);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, Questao);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router