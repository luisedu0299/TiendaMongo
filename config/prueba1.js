const { MongoClient } = require("mongodb");

const uri ='mongodb+srv://liam1901:luisandreayliam@cluster0.sqrw0.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);


const database = client.db('Tienda');//Nombre de la base de datos 
const coleccion = database.collection('Vendedor');
    module.exports ={
      client,
      coleccion
    }
    
    
  //esto de abajo va en el enrutador
//'mongodb+srv://yessi:1020439983@cluster0ficha2364482.6co19r0.mongodb.net/?retryWrites=true&w=majority'