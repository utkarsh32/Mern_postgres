const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Setting = sequelize.define('Setting', {
    isNotificationEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isNewDashboardEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Setting;
};
