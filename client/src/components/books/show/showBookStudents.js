async function fetchGetBooks(name){ 
    let data={name:name}
    const token = localStorage.getItem('token');
if (token===null) window.location.href="error.html"
    return  await fetch('http://localhost:4000/api/externalBook/getBook',{
        body: 
            JSON.stringify(data)
        ,
        headers:{
        'Content-Type': 'application/json',
        'x-access-token': token,
        },
        method: "POST"
    })
        .then(async (response) => { 
            
            try {
                if(response.status===401){
                    window.location.href="error.html"
                }
                const data = await response.json();
                
                return data;
            } catch (err) {
               return err;
            } 
        });
}

export async function listBooks(name){
   var tblBooks="";
    let data=await fetchGetBooks(name);
     //value.universidad_id + value.universidad_libro_id

    Object.entries(data).forEach(([key, value]) => { 
        tblBooks+=`<tr><td ><input id="name${key}" type="text"  class="form-control-plaintext"  value="${value.libro_nombre}" readonly></td> `;
        tblBooks+=`<td ><input id="universidad${key}" type="text"  class="form-control-plaintext"  value="${value.nombre_universidad}" readonly></td> `;
        tblBooks+=`<td ><button class="btn btn-primary " value="${value.universidad_libro_id} ${value.universidad_id}" id="btnView${key}"> Download </button> </td> </tr>`;

    
    });
     
      document.getElementById("tbodyBooks").innerHTML = tblBooks;

   
      
}