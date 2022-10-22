
const { MongoClient } = require("mongodb");

const uri ='mongodb+srv://liam1901:luisandreayliam@cluster0.sqrw0.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);


const database = client.db('TiendaMongo');
const coleccion = database.collection('usuario');
    module.exports ={
      client,
      coleccion
    }
    
 
