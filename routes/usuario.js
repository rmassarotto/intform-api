const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();
const controller = require('../controllers/default');
const { Usuario } = require('../models');

router.get('/', async (req, res) => {
  const { authorization } = req.headers;

  const { id } = jwt.decode(authorization);

  const usuario = await controller.get(id, Usuario);

  res.send(usuario);
});

router.post('/', async (req, res) => {
  try {
    const { body } = req;

    const usuario = await controller.save(body, Usuario);

    res.send(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.put('/', async (req, res) => {
  try {
    const { body } = req;
    const { authorization } = req.headers;

    const { id } = jwt.decode(authorization);

    const usuario = await controller.edit(id, body, Usuario);

    res.send(usuario);
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await controller.remove(Usuario, id);

    res.send({ id });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;