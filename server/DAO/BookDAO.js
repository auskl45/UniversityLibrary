const Book = require('../model/Book.model')
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

let createBook =async (name,description,subject,idBook,base64) =>{
  //las variables pasados por parametros deben llamarse igual en el cliente
    return Book.create({
		name,description,subject,idBook,base64
    })
  }

  let showBooks =async () =>{
      return Book.findAll();
    }
    
    let showBook =async (name) =>{
      return  Book.findAll({
        where: {
          name: {
            //% al principio busca todo lo que tenga el name
            [Op.like]: name+'%'
          }
        }
      });
    }

    let getBookById =async (id) =>{
      
      return  Book.findAll(
        {where: {idBook:id}
      });
    }


    let modifyBook =async (id,dataBook) =>{
      return Book.update(
        { name: dataBook.name ,
        description:dataBook.description,
        subject:dataBook.subject
      },
        { where: { id: id } }
      )
    }

    let deleteBook =async (id) =>{
      return Book.destroy(   
        { where: { id: id } }
      )
    }
  
  
  module.exports = {
      createBook,
      showBooks,
      modifyBook,
      deleteBook,
      showBook,
      getBookById
    };