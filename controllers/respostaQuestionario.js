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
      }
    })
  } else {
    result = await Questionario.findAll()
  }

  return result
};

controller.getResultado = async (id) => {
  let sql = "";

  sql = `SELECT
          iqQ.id AS questaoId,
          iaQ.id AS alternativaId,
          COUNT(*) AS count
        FROM int_questionario q
          JOIN "int_questaoQuestionario" iqQ ON q.id = iqQ."questionarioId"
          JOIN "int_alternativaQuestao" iaQ ON iqQ.id = iaQ."questaoId"
          JOIN "int_respostaQuestionario" irQ ON iaQ.id = irQ."alternativaId"
        WHERE q.id = (:id)
        GROUP BY iaQ.id, iqQ.id`

  return results = await Sequelize.query(sql, {
    type: Sequelize.QueryTypes.SELECT,
    nest: true,
    raw: true,
    replacements: {
      id: id
    }
  });
}

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

    // await transaction.rollback();
    await transaction.commit();
    return;
  } catch (err) {
    await transaction.rollback();
    console.log(err);
    throw new Error(err);
  }
};

module.exports = controller;
