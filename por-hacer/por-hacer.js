 const fs = require('fs');


 let ToDoList = [];

 const saveDB = () => {
     let data = JSON.stringify(ToDoList);
     fs.writeFile('db/data.json', data, (err) => {
         if (err) throw new Error('No se puedo grabar', err);
     });
 }
 const updateDB = () => {
     try {
         ToDoList = require('../db/data.json');
     } catch (error) {
         ToDoList = [];
     }

 }
 const create = (descripcion) => {
     updateDB();
     let toDo = {
         descripcion,
         completado: false
     };

     ToDoList.push(toDo);
     saveDB();
     return toDo;
 }
 const getList = () => {
     updateDB();
     return ToDoList;
 }

 const update = (descripcion, completado = true) => {
     updateDB();

     let index = ToDoList.findIndex(hw => hw.descripcion === descripcion);

     if (index >= 0) {
         ToDoList[index].completado = completado;
         saveDB();
         return true;
     } else {
         return false;
     }
 }
 const deletee = (descripcion) => {
     updateDB();

     let Listnew = ToDoList.filter(hw => hw.descripcion !== descripcion);

     if (ToDoList.length === Listnew.length) {
         return false;
     } else {
         ToDoList = Listnew;
         saveDB();
         return true;
     }
 }
 module.exports = {
     create,
     getList,
     update,
     deletee
 }