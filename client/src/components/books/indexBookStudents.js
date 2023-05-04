import { listBooks} from "./show/showBookStudents.js"
import { fetchRecoverBook} from "./search/recoverBook.js"


document.querySelector('#search').addEventListener('click',async function(e) { 
    let searchBook=  document.querySelector('#searchBook').value;
    await  listBooks(searchBook)

 })

 document.getElementById('tbodyBooks').addEventListener('click',async function(e) { 
    let id=e.target.value;
    const ids = id.split(' ');
    let data={universidad_libro_id:ids[0], universidad_id:ids[1]}
    
    fetchRecoverBook(data);


    
    
    
 })



 