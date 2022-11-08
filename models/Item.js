const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Item model
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
    
    obj_Id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    obj_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    Culture: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // artist: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    artist_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    artist_Nation: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // description: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

    endBy : {
      type: DataTypes.STRING,
      allowNull: true,
    },

    medium : {
      type: DataTypes.STRING,
      allowNull: true,
    },

    city : {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // item_url: {
    linkResource: {
      type: DataTypes.STRING,
      allowNull: true,
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
