function register(){


    var divRegister="";
    divRegister+="<label>Name: </label>";
    divRegister+="<input  type='text' class='form-control mb-2 mt-2'  id='txtName' >";
    divRegister+="<label>Last Name: </label>";
    divRegister+="<input  type='text' class='form-control mb-2 mt-2'  id='txtLastName'>";
    divRegister+="<label>Email: </label>";
    divRegister+="<input  type='text' class='form-control mb-2 mt-2'  id='txtEmailLog' >";
    divRegister+="<label>Password: </label>";
    divRegister+="<input  type='password' class='form-control mb-2 mt-2'  id='txtPasswordLog' >";
    divRegister+="<div class='col text-center mb-3'><button  class='btn btn-primary float-sm-right' style='background-color:rgb(8,46,127)' id='btnLogin' onclick='registerFetch()'>Register </button></div>"

document.getElementById("divLog").innerHTML = divRegister;
}



async function registerFetch(){
 var  name = document.getElementById("txtName").value;
 var  lastName = document.getElementById("txtLastName").value;
 var  email = document.getElementById("txtEmailLog").value;
 var  password = document.getElementById("txtPasswordLog").value;

if (lastName===""||name===""||email===""||password===""){alert("complete todos los campos")}
else if(!/^[A-Za-z\s]+$/g.test(lastName)||!/^[A-Za-z\s]+$/g.test(name)){alert("no se aceptan numeros o caracteres espaciales en estos campos")}
else if( !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){alert("el formato del email es incorrecto")}
else{
 
 var data={name: name,lastName:lastName,email:email,password:password};
 //cambiar ip 192.168.43.25
const res = await fetch('http://localhost:4000/api/user/register', {
body: JSON.stringify(data),
headers: {
    'Content-Type': 'application/json'
},
method: "POST"
}).then((response)=>{

    if(response.status===404){ response.json().then(data => alert(data.msg))}
    else if(response.status===200){
        alert("Usuario registrado")
        document.getElementById("txtName").value="";
        document.getElementById("txtLastName").value=""
        document.getElementById("txtEmailLog").value=""
        document.getElementById("txtPasswordLog").value=""
    }


   })


}

}

