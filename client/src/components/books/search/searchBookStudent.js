async function fetchSearchBook(name){ 
    const token = localStorage.getItem('token');
if (token===null) window.location.href="error.html"
    return  await fetch('http://localhost:4000/api/book/listBook/'+name,{
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
                return data.book;
            } catch (err) {
               return err;
            } 
        });
}

export async function getBook(name){ 

    const data= await fetchSearchBook(name);
    var tblBooks="";
       
    Object.entries(data).forEach(([key, value]) => { 
      
       
        tblBooks+=`<tr><td ><input id="name${key}" type="text"  class="form-control-plaintext"  value="${value.name}"></td> `;
        tblBooks+=`<td ><input id="universidad${key}" type="text"  class="form-control-plaintext"  value="${value.universidad}"></td> </tr>`;
       
       
    });
     
      document.getElementById("tbodyBooks").innerHTML = tblBooks;



}