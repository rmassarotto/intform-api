const controller = {}
const { Questao } = require('../models')

controller.getQuestoes = async (id = null) => {
  let result = []

  if (id) {
    result = await Questao.findByPk(id)
  } else {
    result = await Questao.findAll()
  }

  return result
};

controller.save = async (questao) => {
  return await Questao.create(questao);
}

controller.edit = async (id, questao) => {
  await Questao.update(questao, {
    where: { id }
  })

  return await Questao.getQuestoes(id)
}

controller.delete = async (id) => {
  return await Questao.destroy({ where: { id } })
}

module.exports = controller;
