const {DataTypes}=require("sequelize")
const db=require("../config/database")
const Roles=require("./Roles.model")

const User= db.define("users",{
    id:{
       
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [2, 255],
            msg: "El nombre tiene que ser minimamente de dos caracters"
          }
        }
      },
    lastName:{
        type:DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El email tiene que ser un correo valido"
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "La contraseña tiene que tener minimamente 6 caracteres"
        }
      }
    },
    rol:{
      type: DataTypes.STRING,
      allowNull: true,
    }
   

})
User.hasMany(Roles);


// Force sync all models 
// It will drop the table first  
// and re-create it afterwards 

db.sync({force:false})
module.exports = User
 