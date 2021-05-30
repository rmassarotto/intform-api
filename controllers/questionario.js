const models = require("../models");
const Sequelize = models.sequelize;
const { Questionario, Questao, Alternativa } = require('../models');

let controller = {};

controller.get = async (id = null) => {
  let result = []

  if (id) {
    result = await Questionario.findOne({
      where: {
        id,
      },
      include: [
        {
          as: 'questoes',
          model: Questao,
          include: [
            {
              as: 'alternativas',
              model: Alternativa
            }
          ]
        },
      ]
    })
  } else {
    result = await Questionario.findAll()
  }

  return result
};

controller.getInfo = async (id = null) => {
  let result = []

  if (id) {
    result = await Questionario.findOne({
      where: {
        id,
      },
    })
  } else {
    result = await Questionario.findAll()
  }

  return result
};

controller.save = async (questionario) => {
  const transaction = await Sequelize.transaction();

  const questoes = questionario.questoes;
  delete questionario.questoes;

  try {
    let questionarioResult = await Questionario.create(questionario, { transaction });

    for (const questao of questoes) {

      const alternativas = questao.alternativas
      const tipoAlternativa = questao.tipoAlternativa;
      delete questao.alternativas;
      delete questao.tipoAlternativa;

      let questaoQuestionario = questao
      questaoQuestionario = {
        ...questaoQuestionario,
        questionarioId: questionarioResult.getDataValue("id")
      };

      let questaoResult = await Questao.create(questaoQuestionario, { transaction });

      for (const alternativa of alternativas) {
        let alternativaQuestao = {
          texto: alternativa,
          questaoId: questaoResult.getDataValue("id"),
          tipoId: tipoAlternativa
        }
        await Alternativa.create(alternativaQuestao, { transaction })
      }
    }

    await transaction.commit();
    return;
  } catch (err) {
    await transaction.rollback();
    console.log(err);
    throw new Error(err);
  }
};

module.exports = controller;
