module.exports = class BookViewModel {
    constructor(bookName,bookUniversidad) {
      this.bookName =bookName;
      this.bookUniversidad = bookUniversidad;
    }
    setBookName(name){
        this.bookName=name;
    }
    getBookName(){
        return this.bookName
    }
    
   
  }