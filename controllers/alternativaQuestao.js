const controller = {}
const { AlternativaQuestao, Alternativa } = require('../models')

controller.getAlternativasByQuestaoId = async (questaoId = null) => {
  let result = []

  if (questaoId) {
    result = await AlternativaQuestao.findAll({
      where: { questaoId },
      include: [
        {
          model: Alternativa
        }
      ]
    })
  }

  return result
};

controller.save = async (alternativaQuestao) => {
  return await AlternativaQuestao.create(alternativaQuestao);
}

// controller.edit = async () => {}

controller.deleteByQuestaoId = async (questaoId) => {
  return await AlternativaQuestao.destroy({ where: { questaoId } })
}

module.exports = controller;
