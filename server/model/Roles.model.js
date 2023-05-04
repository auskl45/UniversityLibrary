const {DataTypes}=require("sequelize")
const db=require("../config/database")

const Roles= db.define("roles",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
      },

})

//Roles.belongsToMany(Profile, { through: 'User_Profiles' });


db.sync({force:false})
module.exports = Roles