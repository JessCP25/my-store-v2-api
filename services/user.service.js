const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize');
class UserService {
  constructor() {}

  async create(data) {
    // return data;
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    // const client = await getConnection();
    // const rta = await client.query('SELECT * FROM tasks');
    const rta = await models.User.findAll({
      include: ['customer']
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    await models.User.update(changes, { where: { id } });
    return user;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await models.User.destroy({ where: { id } });
    return { id };
  }
}

module.exports = UserService;
