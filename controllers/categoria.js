const controller = {}
const { Categoria } = require('../models')

controller.getUsuarios = async (id = null) => {
  let result = []

  if (id) {
    result = await Categoria.findByPk(id)
  } else {
    result = await Categoria.findAll()
  }

  return result
};

controller.save = async (categoria) => {
  return await Categoria.create(categoria);
}

controller.edit = async (id, categoria) => {
  await Categoria.update(categoria, {
    where: { id }
  })

  return await Categoria.getUsuarios(id)
}

controller.delete = async (id) => {
  return await Categoria.destroy({ where: { id } })
}

module.exports = controller;
