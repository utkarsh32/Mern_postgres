const { Sequelize } = require('sequelize');
const userModel = require('./user');
const settingModel = require('./setting');

const sequelize = new Sequelize('my-account', 'postgres', '1234', {
  host: '127.0.0.1',
  dialect: 'postgres',
});

const User = userModel(sequelize);
const Setting = settingModel(sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  User,
  Setting,
  sequelize,
};
