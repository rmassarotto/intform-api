const controller = {}
const { Questionario } = require('../models')

controller.getQuestionarios = async (id = null) => {
  let result = []

  if (id) {
    result = await Questionario.findByPk(id)
  } else {
    result = await Questionario.findAll()
  }

  return result
};

controller.save = async (questionario) => {
  return await Questionario.create(questionario);
}

controller.edit = async (id, questionario) => {
  await Questionario.update(questionario, {
    where: { id }
  })

  return await Questionario.getQuestionarios(id)
}

controller.delete = async (id) => {
  return await Questionario.destroy({ where: { id } })
}

module.exports = controller;
