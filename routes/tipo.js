const { Router } = require('express');
const router = Router()
const tipoController = require('../controllers/tipo');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  const tipos = await tipoController.getTipos(id)
  res.send(tipos || [])
});

router.post('/', async (req, res) => {
  try {
    const { body } = req

    const tipo = await tipoController.save(body);

    res.send(tipo)
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params

    const tipo = await tipoController.edit(id, body)

    res.send(tipo);
  } catch (error) {
    res.status(500).send({ error })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await tipoController.delete(id);

    res.send(id)
  } catch (error) {
    res.status(500).send({ error })
  }
});

module.exports = router