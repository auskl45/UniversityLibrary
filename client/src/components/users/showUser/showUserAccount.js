async function fetchGetUser(){ 

    const token = localStorage.getItem('token');
if (token===null) window.location.href="error.html"
    return  await fetch('http://localhost:4000/api/externalUser/getUser',{
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
               
                return data;
            } catch (err) {
               return err;
            } 
        });
}
export async function showAccount(){
  
    let data=await fetchGetUser();

    var user="";
    user+=`<div class="row"><div class="col-md-6"> <label >ID University</label> <input value="${data.universidad_id}" type="text" class="form-control" id="idUni" readonly> </div>`
    user+=`<div class="col-md-6"> <label >Group</label> <input value="${data.grupo}" type="text" class="form-control" id="idGroup"> </div></div>`

    user+=`<div class="row"><div class="col-md-6"> <label >Name of University</label> <input value="${data.nombre_universidad}" type="text" class="form-control" id="idNameUni"> </div>`
    user+=`<div class="col-md-6"> <label >URL</label> <input value="${data.url_recuperacion_libro}" type="text" class="form-control" id="idUrl"> </div></div>`
    user+=` <div class="mt-3"> <button  class='btn btn-warning ' id="btnUpdateAccount" >Update </button>`;
    user+=`<button  class='btn btn-primary ' data-toggle='modal' data-target='#exampleModal'>Change password</button> </div>`;


    document.getElementById("account").innerHTML = user;
}
