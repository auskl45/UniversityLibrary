async function fetchGetBooks(){ 
    const token = localStorage.getItem('token');
if (token===null) window.location.href="error.html"
    return  await fetch('http://localhost:4000/api/book/listBooks',{
        headers:{
        'Content-Type': 'application/json',
        'x-access-token': token,
        }
    })
        .then(async (response) => { 
            console.log(response.status)
            try {
                if(response.status===401){
                    window.location.href="error.html"
                }
                const data = await response.json();
                return data.books;
            } catch (err) {
               return err;
            } 
        });
}

export async function listBooks(){
    var tblBooks="";
    let data=await fetchGetBooks();

    Object.entries(data).forEach(([key, value]) => { 
        tblBooks+=`<tr> <td id="id${key}">${value.id}</td> <td ><input id="name${key}" type="text"  class="form-control-plaintext"  value="${value.name}"></td> `;
        tblBooks+=`<td ><textarea id="description${key}" type="text"  class="form-control-plaintext" rows="6">${value.description}</textarea></td>`;
        tblBooks+=`<td ><input id="subject${key}" type="text"  class="form-control-plaintext"  value="${value.subject}"></td> `;
        tblBooks+=`<td><button  class='btn btn-dark float-sm-right' name="botonModify"  id='btnUpdateBook${key}'  >Modify </button></td>`;
        tblBooks+=`<td><button  class='btn btn-danger float-sm-right' name="botonDelete" id='btnDeleteBook${key}' >Delete </button></td></tr>`;
       
    });
     
      document.getElementById("tbodyBooks").innerHTML = tblBooks;
   
      
}



