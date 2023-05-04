
 function  login(){
    var divLogin="";
divLogin+="<label>Email: </label>";
divLogin+="<input  type='text' class='form-control mb-2 mt-2'  id='txtEmail' >";
divLogin+="<label>Password: </label>";
divLogin+="<input  type='password' class='form-control mb-2 mt-2'  id='txtPassword' >";
divLogin+="<div class='col text-center mb-3'><button  class='btn btn-primary ' style='background-color:rgb(16,177,149)' id='btnLogin' onclick='loginFetch()'>Login </button></div>"

document.getElementById("divLog").innerHTML = divLogin;
}
document.addEventListener("DOMContentLoaded",async()=>{
    try{
         login();
      
    }catch(e){
    console.log(e);
    }
})

async function loginFetch(){

    var  email = document.getElementById("txtEmail").value;
    var  password = document.getElementById("txtPassword").value;

    var data={email:email,password:password};
    if( !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){alert("el formato del email es incorrecto")}
else{
  
   const res = await fetch('http://localhost:4000/api/user/login', {
   body: JSON.stringify(data),
   headers: {
       'Content-Type': 'application/json'
   },
   method: "POST"
   }).then((response)=>{

    if(response.status===401 || response.status===404){ response.json().then(data => alert(data.msg))}
    else if(response.status===200){
        response.json().then(data => {
            localStorage.setItem('token', data.token)
            if(data.rol==="admin"){
                window.location.href="./admin/books.html"
            }else if (data.rol==="student"){
                window.location.href="./student/student.html"
            }
              
        })
        
    }


   })
}


   
   }