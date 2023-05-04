
//ESTOS METODOS YA NO SE USAN
async function fetchGetExternBooks(){ 
    return  await fetch('http://localhost:4000/api/externalBook/getBook')
        .then(async (response) => { 
            try {
                const data = await response.json();   
            
                return data;
            } catch (err) {
               return err;
            } 
        });
}

 async function listExternalBooks(){
    var tblBooks="";
    let data=await fetchGetExternBooks();
    
    Object.entries(data).forEach(([key, value]) => {
      
        tblBooks+=`<tr> <td id="idExternal${key}">${value.idBook}</td> <td ><input id="nameExternal${key}" type="text"  class="form-control-plaintext"  value="${value.name}"></td> `;
        tblBooks+=`<td ><input id="subjectExternal${key}" type="text"  class="form-control-plaintext"  value="${value.topic}"></td> `;
        tblBooks+="<td><button  class='btn btn-dark float-sm-right' id='btnUpdateExternalBook' onclick='updateExternalBook("+key+") '>Modify </button></td>";
        tblBooks+=`<td><button  class='btn btn-danger float-sm-right' id='btnDeleteExternalBook' onclick="deleteExternalBook(${value.idBook})" >Delete </button></td></tr>`;
      });
      document.getElementById("tbodyExternBooks").innerHTML = tblBooks;
}
document.addEventListener("DOMContentLoaded",async()=>{
    try{
        //await
         listExternalBooks();
                
    }catch(e){
    console.log(e);
    }})

    async function deleteExternalBook(id){
    
       
        await  fetch(`http://localhost:4000/api/externalBook/deleteBook/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "DELETE"
        }).then( (response)=>{
          
             
            if(response.status===200){
                alert("Libro Eliminado")
                listExternalBooks();   
            }
           })
     }

     

 async function addExternalBook(){
    var  name = document.getElementById("txtExternalBookName").value;
    var  subject = document.getElementById("txtExternalSubject").value;
   var id="1";
    if (name===""||subject===""){alert("complete todos los campos")}
    else{
    var data={libro_id:id ,libro_nombre: name,tema:subject};

   await fetch('http://localhost:4000/api/externalBook/createBook', {
   body: JSON.stringify(data),
   headers: {
       'Content-Type': 'application/json'
   },
   method: "POST"
   }).then((response)=>{
  
       if(response.status===200){



           alert("Libro registrado")
           document.getElementById("txtExternalBookName").value=""
           document.getElementById("txtExternalSubject").value=""
           listExternalBooks();  
         
           
       }
      })
  }
}

async function updateExternalBook(key){
  
    let id = document.querySelector(`#idExternal${key}`).textContent;
    let name = document.querySelector(`#nameExternal${key}`).value;
    let description = document.querySelector(`#descriptionExternal${key}`).value;
    let subject = document.querySelector(`#subjectExternal${key}`).value;
   
    let dataBook={name:name,description:description,topic:subject}
  
    await fetch(`http://localhost:4000/api/externalBook/modifyBook/${id}`, {
    body: JSON.stringify(dataBook),
    headers: {
        'Content-Type': 'application/json'
    },
    method: "post"
    }).then((response)=>{
    
        if(response.status===200){
            alert("Libro Actualizado")
            listExternalBooks();  
            
        }
       })
 }
