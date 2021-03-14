const controller = {}
const { QuestionarioQuestao, Questao } = require('../models')

controller.getQuestoesByQuestionarioId = async (questionarioId = null) => {
  let result = []

  if (questionarioId) {
    result = await QuestionarioQuestao.findAll({
      where: { questionarioId },
      include: [
        {
          model: Questao
        }
      ]
    })
  }

  return result
};

controller.save = async (questionarioQuestao) => {
  return await QuestionarioQuestao.create(questionarioQuestao);
}

// controller.edit = async () => {}

controller.deleteByQuestionarioId = async (questionarioId) => {
  return await QuestionarioQuestao.destroy({ where: { questionarioId } })
}

module.exports = controller;
