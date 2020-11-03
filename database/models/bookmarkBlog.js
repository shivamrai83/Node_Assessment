const { DataTypes } = require("sequelize");

module.exports = function (dbs) {
  return dbs.define(
    "bookmarks",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
          },
     
      blogName: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      blogContent: {
       
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      blogRating: {
        allowNull: false,
        type: DataTypes.INTEGER(5)
      },
    },
    { timestamps: false }
  );
};