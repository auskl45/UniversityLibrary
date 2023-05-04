import { deleteBook } from "./delete/deleteBook.js";
import { addBookFetch} from "./register/registerBook.js";
import { listBooks } from "./show/showBooks.js";
import { updateBook } from "./update/updateBook.js";

//LIST
await  listBooks();
//ADD AND LIST
 document.querySelector('#btnAddBook').addEventListener('click',async function(e) { 
   await addBookFetch()
   await listBooks() 
})


//UPDATE AND LIST
//DELETE AND LIST 
document.getElementById('tbodyBooks').addEventListener('click',async function(e) { 
let idButton=e.target.id
let key=idButton.substr(idButton.length-1,2)
let idTable=  document.querySelector(`#id${key}`).textContent;
  if(e.target.name==="botonDelete"){
   await deleteBook(idTable);
   await listBooks()
}else if(e.target.name==="botonModify"){
  let name=  document.querySelector(`#name${key}`).value;
  let description=  document.querySelector(`#description${key}`).value;
  let subject=  document.querySelector(`#subject${key}`).value;

  let dataBook={name:name,description:description,subject:subject}
      
      await updateBook(idTable,dataBook);
      await listBooks();
  }
})

