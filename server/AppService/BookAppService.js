const { commandAdd, commandUpdate, commandDelete} = require('../COMMANDS/BookCommand');
const { showBook, showBooks,getBookById }=require('../DAO/BookDAO');
const BookViewModel = require('../ViewModel/BookViewModel');

let addBookAppService =async (name,description,subject,idBook,base64) =>{
    let book=await commandAdd(name,description,subject,idBook,base64)
    return book
}
let listBookAppService =async (name) =>{
    let book=await showBook(name)
    return book
}

let listPublicBooksAppService =async () =>{
    let book=await showBooks()
    let arrayBook=[];
    
    book.forEach(element => {
    
        arrayBook.push(new BookViewModel(element.name, element.universidad))
    });
    return arrayBook
}
let listBooksAppService =async () =>{
    let book=await showBooks()
    return book
}
let getBookByIdAppService =async (id) =>{
    let book=await getBookById(id)
    return book
}

let updateBookAppService =async (id,data) =>{
    let book=await commandUpdate(id,data)
    return book

}
let deleteBookAppService =async (id) =>{
    let book=await commandDelete(id)
    return book

}

module.exports = {
    listBookAppService,
    listPublicBooksAppService,
    listBooksAppService,
    addBookAppService,
    updateBookAppService,
    deleteBookAppService,
    getBookByIdAppService
   
  };