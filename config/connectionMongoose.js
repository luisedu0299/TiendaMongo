//gestionar la conexion a base de datos en mongo

const mongoose = require ('mongoose');

const url ='mongodb+srv://liam1901:luisandreayliam@cluster0.sqrw0.mongodb.net/TiendaMongo?retryWrites=true&w=majority';




const connectionParams={
    useNewUrlParser:true,  // trae la conexion como json
    useUnifiedTopology:true
}

mongoose.connect(url,connectionParams)
.then(()=> {
    console.log ('conectado a la base de datos')
})
.catch((err)=>{
    console.error('error connecting to the database')
})

module.exports={
    mongoose
}
