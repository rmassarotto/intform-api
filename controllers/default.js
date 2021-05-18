const controller = {}

controller.get = async (id = null, model) => {
  let result = []

  if (id) {
    result = await model.findByPk(id)
  } else {
    result = await model.findAll()
  }

  return result
};

controller.save = async (objeto, model) => {
  return await model.create(objeto);
};

controller.edit = async (id, objeto, model) => {
  await model.update(objeto, {
    where: { id }
  })

  return await model.findByPk(id)
}

controller.delete = async (id, model) => {
  return await model.destroy({ where: { id } })
}

module.exports = controller;