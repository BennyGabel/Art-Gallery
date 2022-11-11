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

    cobjid: {
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

    endby: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    medium: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    linkresource: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isURL: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    ispublic: {
      type: DataTypes.BOOLEAN,
    },

    gallerynum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "item",
  }
);

module.exports = Item;
