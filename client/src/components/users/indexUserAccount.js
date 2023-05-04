import { showAccount} from "./showUser/showUserAccount.js"
import { updateUserAccount} from "./updateUser/updateUserAccount.js"

await  showAccount();

document.getElementById('btnUpdateAccount').addEventListener('click',async function(e) { 
    let group=  document.querySelector("#idGroup").value;
    let nameUni=  document.querySelector("#idNameUni").value;
    let url=  document.querySelector("#idUrl").value;
    let dataUser={grupo:group,nombre_universidad:nameUni,url_recuperacion_libro:url,metodo:"post"}
    await updateUserAccount(dataUser)

    })

    document.getElementById('saveNewPassword').addEventListener('click',async function(e) { 
        let group=  document.querySelector("#idGroup").value;
    let nameUni=  document.querySelector("#idNameUni").value;
    let url=  document.querySelector("#idUrl").value;
       let password=  document.querySelector("#idNewPass").value;
       
        let dataUser={nueva_contrasena:password,grupo:group,nombre_universidad:nameUni,url_recuperacion_libro:url,metodo:"post"}
        await updateUserAccount(dataUser)
    
        })
    