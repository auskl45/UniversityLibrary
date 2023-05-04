

export async function fetchRecoverBook(data){

    const token = localStorage.getItem('token');
    await fetch('http://localhost:4000/api/externalBook/recoverBook', {
   body: JSON.stringify(data),
   headers: {
       'Content-Type': 'application/json',
       'x-access-token': token,

   },
   method: "POST"
   }).then(async (response)=>{
   let data= await response.json();
   var bufferArray = base64ToArrayBuffer(data);
   var blobStore = new Blob([bufferArray], { type: "application/pdf" });
   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
       window.navigator.msSaveOrOpenBlob(blobStore);
       return;
   }
   var dataBLOB = window.URL.createObjectURL(blobStore);
   var link = document.createElement('a');
   document.body.appendChild(link);
   link.href = dataBLOB;
   link.download = "file.pdf";
   link.click();
   window.URL.revokeObjectURL(dataBLOB);
   link.remove();
      })
  
}

function base64ToArrayBuffer(data) {
    var bString = window.atob(data);
    var bLength = bString.length;
    var bytes = new Uint8Array(bLength);
    for (var i = 0; i < bLength; i++) {
        var ascii = bString.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes;
};