const { Router } = require('express');
const router = Router()
const controller = require('../controllers/default');
const controllerQuestionario = require('../controllers/questionario');
const { Questionario } = require('../models');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const questionarios = await controller.get(id, Questionario)
  res.send(questionarios || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const questionario = await controllerQuestionario.save(body);

    res.send(questionario)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const questionario = await controller.edit(id, body, Questionario)

    res.send(questionario);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, Questionario);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router