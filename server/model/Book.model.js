const {DataTypes}=require("sequelize")
const db=require("../config/database")

const Book= db.define("books",{
    id:{
       
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
      },
    description:{
        type:DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    base64: {
      type: DataTypes.TEXT('long'),
    }
    ,
    idBook: {
      type: DataTypes.INTEGER,
    }
   

})
// Force sync all models 
// It will drop the table first  
// and re-create it afterwards 

db.sync({force:false})
module.exports = Book
 