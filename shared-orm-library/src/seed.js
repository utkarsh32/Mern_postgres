const { User, sequelize } = require('./models');

const seedUsers = async () => {
  await sequelize.sync({ force: true }); // This will drop and recreate tables

  await User.bulkCreate([
    {
      firstName: 'Raj',
      lastName: 'Raj',
      email: 'raj@example.com',
      password: 'password123'
    },
    {
      firstName: 'Raju',
      lastName: 'Raju',
      email: 'raju@example.com',
      password: 'password123'
    },
    {
      firstName: 'Sam',
      lastName: 'Sam',
      email: 'sam@example.com',
      password: 'password123'
    },
    {
      firstName: 'Nitin',
      lastName: 'Nitin',
      email: 'nitin@example.com',
      password: 'password123'
    }
  ]);

  console.log('Users have been seeded');
  await sequelize.close();
};

seedUsers().catch(error => {
  console.error('Failed to seed users:', error);
});
