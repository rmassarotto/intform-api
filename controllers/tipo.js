const controller = {}
const { Tipo } = require('../models')

controller.getTipos = async (id = null) => {
  let result = []

  if (id) {
    result = await Tipo.findByPk(id)
  } else {
    result = await Tipo.findAll()
  }

  return result
};

controller.save = async (tipo) => {
  return await Tipo.create(tipo);
}

controller.edit = async (id, tipo) => {
  await Tipo.update(tipo, {
    where: { id }
  })

  return await Tipo.getTipos(id)
}

controller.delete = async (id) => {
  return await Tipo.destroy({ where: { id } })
}

module.exports = controller;
