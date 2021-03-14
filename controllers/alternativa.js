const controller = {}
const { Alternativa } = require('../models')

controller.getAlternativas = async (id = null) => {
  let result = []

  if (id) {
    result = await Alternativa.findByPk(id)
  } else {
    result = await Alternativa.findAll()
  }

  return result
};

controller.save = async (alternativa) => {
  return await Alternativa.create(alternativa);
}

controller.edit = async (id, alternativa) => {
  await Alternativa.update(alternativa, {
    where: { id }
  })

  return await Alternativa.getAlternativas(id)
}

controller.delete = async (id) => {
  return await Alternativa.destroy({ where: { id } })
}

module.exports = controller;
