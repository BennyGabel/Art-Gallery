const User = require("./User");
const Item = require("./Item");
const Comment = require("./Comment");

//associations listed here

// User.hasMany(Item, {
//     foreignKey: "user_id",
//   });
  
//   Item.belongsTo(User, {
//     foreignKey: "user_id",
//   });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Item, {
    foreignKey: 'Item_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Item.hasMany(Comment, {
    foreignKey: 'Item_id'
  });


module.exports = { User, Item, Comment };
