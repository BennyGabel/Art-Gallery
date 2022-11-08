const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Item model
class Art extends Model {}

// create fields/columns for Item model
Art.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    cobjid:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    objname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    culture: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // artist: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    artistname: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    artistnation: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // description: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

    endby : {
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
    linkresource: {
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
    modelName: "art",
  }
);

module.exports = Art;
