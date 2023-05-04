const {createBook,modifyBook,deleteBook}=require('../DAO/BookDAO')
exports.commandAdd=async(name,description,subject,idBook,base64)=>{
    try{
    await (createBook(name,description,subject,idBook,base64));
   return "libro creado"
    }catch(error){
        return error
    }	
}

 exports.commandUpdate=async(id,data)=>{
   try{
    await modifyBook(id, data);
   return "libro modificado"
}catch(error){
    return error
}
 }

 exports.commandDelete=async(id)=>{
    try{
     await deleteBook(id);
     return "libro eliminado"
 }catch(error){
     return error
 }
  }
	
