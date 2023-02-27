import Sequelize from 'sequelize'
import {client} from '../database/dbConnect.database.js'

const Category = client.define('Category', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.DataTypes.STRING(100),
  },
  code: {
    type: Sequelize.DataTypes.STRING(10),
  },
  icon: {
    type: Sequelize.DataTypes.STRING,
  },
  link: {
    type: Sequelize.DataTypes.STRING,
  },
  active: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: false,
  },
  variablePrice: {
    type: Sequelize.DataTypes.BOOLEAN,
    defaultValue: false,
  },
  order: {
    type: Sequelize.DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  freezeTableName:true,
  timestamps: true,
  createdAt: true,
  updatedAt: true,
});

export {Category}