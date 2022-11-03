const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Item model
class Item extends Model {}

// create fields/columns for Item model
Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    artist: {

    },

    
   item_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "item",
  }
);

module.exports = Item;