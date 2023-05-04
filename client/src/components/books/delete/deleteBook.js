export async function deleteBook(id){
    const token = localStorage.getItem('token');
    await  fetch(`http://localhost:4000/api/book/deleteBook/${id}`, {
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,

    },
    method: "DELETE"
    }).then((response)=>{
    
        if(response.status===200){
            alert("Libro Eliminado")
            
        }
       })
 }