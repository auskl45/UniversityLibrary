const {  registerUser ,loginUser} = require('../COMMANDS/UserCommand');
const { showUsers }=require('../DAO/UserDAO');
let registerUserAppService =async (name,lastName,email,password,rol) =>{
    let user=await registerUser(name,lastName,email,password,rol)
    return user
}



let loginUserAppService =async (email,password) =>{
    let user=await loginUser(email,password)
    return user

}

let getUsersAppService =async () =>{
    let users=await showUsers()
    return users

}

module.exports = {
    registerUserAppService,
    loginUserAppService,
    getUsersAppService
   
  };