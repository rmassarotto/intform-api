const models = require("../models");
const Sequelize = models.sequelize;
const { Questionario, Questao, Alternativa, RespostaQuestionario } = require('../models');

let controller = {};

controller.get = async (id = null) => {

  let result = []

  if (id) {
    result = await RespostaQuestionario.findOne({
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

controller.save = async (questionario) => {
  const transaction = await Sequelize.transaction();

  const questoes = questionario.questoes;
  delete questionario.questoes;

  try {
    for (const questao of questoes) {

      const questaoId = questao.id

      for (const alternativa of questao.alternativas) {
        console.log(alternativa);
        if (alternativa.selected === 1) {
          let resposta = {
            questaoId: questaoId,
            alternativaId: alternativa.id,
            selected: 1
          };
          await RespostaQuestionario.create(resposta, { transaction });
        }
      }
    }

    await transaction.rollback();
    // await transaction.commit();
    return;
  } catch (err) {
    await transaction.rollback();
    console.log(err);
    throw new Error(err);
  }
};

module.exports = controller;
