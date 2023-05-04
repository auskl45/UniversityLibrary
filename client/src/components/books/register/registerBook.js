

export async function addBookFetch(){
    let  name = document.getElementById("txtBookName").value;
    let  description = document.getElementById("txtDescription").value;
    let  subject = document.getElementById("txtSubject").value;
    let input = document.getElementById('formFile').files;
    
    if (name===""||description===""||subject===""||input.length <= 0){alert("complete todos los campos")}
    else{
    
 // Select the very first file from list
 var fileToLoad = input[0];
 // FileReader function for read the file.
 var fileReader = new FileReader();
 var base64;
 var base64B;
 // Onload of file read the file content
 fileReader.onload = function(fileLoadedEvent) {
     base64 = fileLoadedEvent.target.result;
     base64B = base64.replace(/^data:application\/pdf;base64,/,'');
     
 

    let idBook =Math.floor(Math.random()*10000);
    let data={name: name,description:description,subject:subject,idBook:idBook,base64:base64B};
    let dataBookExt={libro_id:idBook ,libro_nombre: name,tema:subject};

    const token = localStorage.getItem('token');

     fetch('http://localhost:4000/api/book/addBook', {
   body: JSON.stringify(data),
   headers: {
       'Content-Type': 'application/json',
       'x-access-token': token,

   },
   method: "POST"
   }).then(async (response)=>{
   
       if(response.status===200){

        await fetch('http://localhost:4000/api/externalBook/createBook', {
   body: JSON.stringify(dataBookExt),
   headers: {
       'Content-Type': 'application/json',
       'x-access-token': token,

   },
   method: "POST"
   }).then((response)=>{
   
       if(response.status===200){
        alert("Libro registrado")
        document.getElementById("txtBookName").value=""
        document.getElementById("txtDescription").value=""
        document.getElementById("txtSubject").value=""
       }})
      
       }
    
      })
    
  }
   // Convert data to base64

  fileReader.readAsDataURL(fileToLoad);
}
}