const { Router } = require('express');
const router = Router()
const alternativaController = require('../controllers/alternativa');
// const usuario = require('../controller/usuario')
// const database = require('../models')

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const alternativas = await alternativaController.getAlternativas(id)
  res.send(alternativas || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const alternativa = await alternativaController.save(body);

    res.send(alternativa)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const alternativa = await alternativaController.edit(id, body)

    res.send(alternativa);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await alternativaController.delete(id);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router