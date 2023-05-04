async function fetchGetUsers(){ 
    const token = localStorage.getItem('token');
if (token===null) window.location.href="error.html"
    return  await fetch('http://localhost:4000/api/user/getUsers',{
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
                return data.users;
            } catch (err) {
               return err;
            } 
        });
}

export async function listUsers(){
  
    let data=await fetchGetUsers();
    var tblUsers="";
    Object.entries(data).forEach(([key, value]) => { 
        tblUsers+=`<tr> <td id="id${key}">${value.id}</td> `;
        tblUsers+=`<td ><input id="name${key}" type="text"  class="form-control-plaintext" value="${value.name } ${value.lastName }"></input></td>`;
        tblUsers+=`<td ><input id="email${key}" type="text"  class="form-control-plaintext"  value="${value.email}"></td> `;
        tblUsers+=`<td ><input id="rol${key}" type="text"  class="form-control-plaintext"  value="${value.rol}"></td> `;
        tblUsers+=`<td><button  class='btn btn-dark float-sm-right' name="botonModify"  id='btnUpdateUser${key}'  >Modify </button></td>`;
        tblUsers+=`<td><button  class='btn btn-danger float-sm-right' name="botonDelete" id='btnDeleteUser${key}' >Delete </button></td></tr>`;
       
    });
     
      document.getElementById("tbodyUsers").innerHTML = tblUsers;
   

      
}

