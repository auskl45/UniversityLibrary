const { addBookAppService, listBooksAppService, listBookAppService, updateBookAppService, deleteBookAppService, listPublicBookAppService, listPublicBooksAppService } = require("../AppService/BookAppService")

exports.addBook=async(req, res)=>{
    console.log(req.body)
	try{
        await addBookAppService(req.body.name,req.body.description,req.body.subject,req.body.idBook,req.body.base64)
	    res.json()

	}catch(error){
		res.status(500).json({msg:error})
	}	
}

exports.listBooks=async(req, res)=>{ 
	try{	
    let books=await listBooksAppService()
	res.json({
		books:books
	})

	}catch(error){
		res.status(500).json({msg:error})
	}	
 }
 exports.listPublicBooks=async(req, res)=>{ 
	try{	
    let books=  await listPublicBooksAppService();
	res.json({
		books:books
	})
	}catch(error){
		res.status(500).json({msg:error})
	}	
 }

 exports.listBook=async(req, res)=>{
    try{
    const book = await listBookAppService(req.params.name);
    res.json({
        book:book
    })
}catch(error){
    res.status(500).json({msg:error})
}
 }

 exports.updateBook=async(req, res)=>{
    
	try{
        await updateBookAppService(req.params.id,req.body)
	    res.json()
	}catch(error){
		res.status(500).json({msg:error})
	}	
 }

 exports.deleteBook=async(req, res)=>{ 	
	try{
        await deleteBookAppService(req.params.id)
	    res.json("libro borrado");
	}catch(error){
		res.status(500).json({msg:error})
	}	
  }
