import Sequelize from 'sequelize'
import {client} from '../database/dbConnect.database.js'
import {Category} from './category.model.js'
const Product = client.define('Product', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING(100),
      required: true,
    },
    description: {
      type: Sequelize.DataTypes.STRING,
      required: true,
    },
    code: {
      type: Sequelize.DataTypes.STRING(100),
      required: true,
    },
    price: {
      type: Sequelize.DataTypes.INTEGER,
      default: 0,
    },
    unit: {
      type: Sequelize.DataTypes.STRING(20),
    },
    image: {
      type: Sequelize.DataTypes.STRING,
    },
    variablePrice: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    },
    discount: {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 0,
    },
    legacy_id: {
      type: Sequelize.DataTypes.STRING,
    },
    legacy_last_save: {
      type: Sequelize.DataTypes.STRING,
    },
    active: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });

  Product.belongsTo(Category, { foreignKey: 'category_id', targetKey: 'id', as: 'category' });

  export {Product};
  