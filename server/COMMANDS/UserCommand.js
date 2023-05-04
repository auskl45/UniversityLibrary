const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')
const authConfig=require('../config/auth')
const {userByEmail,createUser}=require('../DAO/UserDAO')
//import Roles from "../model/Roles.model";

let registerUser =async (name,lastName,email,password,rol) =>{
    const userMap = new Map();
    //crear un rol para cada usuario
	//encriptar contraseña
   let passwordEncripted = bcrypt.hashSync(password,authConfig.rounds);
   //crear usuario
   if(await userByEmail(email)!=null){
    return "usuario existente";
   
   }else{
   
	Object.entries(await (createUser(name,lastName,email,passwordEncripted))).forEach(([key, value]) => {
		userMap.set(key,value)
	  });
		//crear token
		let token= jwt.sign({user:userMap},authConfig.secret,{
			expiresIn:authConfig.expires
		});
        userMap.set("token",token)
        return userMap;
       
}
    
  }
  let loginUser =async (email,password) =>{
    const userMap = new Map();

	if(await userByEmail(email)===null){
        return "usuario no encontrado";
		
	}else{
		Object.entries(await (userByEmail(email))).forEach(([key, value]) => {
			userMap.set(key,value)
		  });

		if(bcrypt.compareSync(password,userMap.get("password"))){
			//crear token
		let token= jwt.sign({user:userMap},authConfig.secret,{
			expiresIn:authConfig.expires
		});
        userMap.set("token",token)
        //console.log(userMap)
        return userMap;
     
		}else{
            return "contraseña incorrecta";
			
		}
	}
  }


  module.exports = {
    registerUser,
    loginUser
  };