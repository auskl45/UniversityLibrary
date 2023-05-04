const {getUsersAppService, registerUserAppService,loginUserAppService} = require('../AppService/UserAppService');
exports.register = async(req, res) => {
	let user=await registerUserAppService(req.body.name,req.body.lastName,req.body.email,req.body.password,req.body.rol)
	
	try{
		if(user==="usuario existente"){
			res.status(404).json({msg: "correo ya existe"})
		}else{
	
	res.json({
		msg:"registro existoso"
	})
}
	}catch(error){
		res.status(500).json({msg:error})
	}	
};


 exports.login=async(req, res)=>{
	let user=await loginUserAppService(req.body.email,req.body.password)
	try{
		if(user==="usuario no encontrado"){
			res.status(404).json({msg:"Usuario no encontrado"})
		}else if(user==="contraseña incorrecta"){
			res.status(401).json({msg:"Contraseña incorrecta"})
		}else{

	res.json({
		name:user.get("name"),
		email:user.get("email"),
		rol:user.get("rol"),
		token:user.get("token")
	})
}
	}catch(error){
		res.status(500).json({msg:error})
	}
	

}
exports.getUsers=async(req, res)=>{
	let users=await getUsersAppService()
	try{
		

	res.json({
		users
	})

	}catch(error){
		res.status(500).json({msg:error})
	}
	

}