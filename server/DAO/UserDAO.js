const User = require('../model/User.model')

let userByEmail =async (email) =>{
  return  User.findOne({
        where:{
            email:email
        }
    })
}
let createUser =async (name,lastName,email,password) =>{
    //las variables pasados por parametros deben llamarse igual en el cliente
      return User.create({
          name,lastName,email,password
      })
    }
    
let showUsers =async () =>{
          return User.findAll();
        }

module.exports = {
    userByEmail,
    createUser,
    showUsers
  };