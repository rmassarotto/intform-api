const { Router } = require('express');
const router = Router()
const controllerResposta = require('../controllers/respostaQuestionario');
const { RespostaQuestionario } = require('../models');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const respostas = await controllerResposta.get(id)
  res.send(respostas || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const resposta = await controllerResposta.save(body);

    res.send(resposta)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const resposta = await controller.edit(id, body, RespostaQuestionario)

    res.send(resposta);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await controller.delete(id, RespostaQuestionario);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router