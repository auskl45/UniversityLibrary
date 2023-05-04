export async function updateBook(id,dataBook){
    const token = localStorage.getItem('token');
   await fetch(`http://localhost:4000/api/book/updateBook/${id}`, {
   body: JSON.stringify(dataBook),
   headers: {
       'Content-Type': 'application/json',
       'x-access-token': token,
   },
   method: "PUT"
   }).then((response)=>{
   
       if(response.status===200){
           alert("Libro Actualizado")
           
       }
      })
}