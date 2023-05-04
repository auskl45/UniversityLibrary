export async function updateUserAccount(data){
    const token = localStorage.getItem('token');
   await fetch('http://localhost:4000/api/externalUser/updateUser', {
   body: JSON.stringify(data),
   headers: {
       'Content-Type': 'application/json',
       'x-access-token': token,
   },
   method: "post"
   }).then((response)=>{
   
       if(response.status===200){
           alert("User Updated")
           
       }
      })
}