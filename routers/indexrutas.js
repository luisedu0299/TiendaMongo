// aca se van a poner todas las rutas del proyecto


const express = require('express');
const modeloproducto = require('../modelos/productos');
const modelousuario = require('../modelos/usuarios')
const  conexion= require('../config/connectionMongoose')
const router = express.Router();


router.get('/', (req,res)=>{
    res.send ("Inicio desde el index")
});




router.get('/about', (req,res)=>{
    res.send ("Inicio desde el about")
});

router.get('/conectar', (req,res)=>{
    dbc.mongoose;
});


router.get('/inicio', async (req, res) => {
   res.render('pages/index');
  });


router.get('/formulario',  (req, res) => {
   
    res.render('pages/productos/insertarProductos');
   })


router.post('/registrar',async(req,res,next)=>{
    
  
    const productodb= new modeloproducto({
       referencia : req.body.Referencia,
       nombre: req.body.Nombre,
       descripcion: req.body.Descripcion,
       precio: req.body.Precio,
       stock: req.body.Stock,
       habilitado: true

    })
    await productodb.save()
    console.log(req.body.Referencia)
  res.render('pages/index')
});



router.get('/formularioUsuario', (req,res)=>{
    res.render('pages/usuarios/insertarUsuario');
})

router.post('/registroUsuario',async(req,res,next)=>{

    const usuariodb = new modelousuario({
        correo: req.body.Correo,
        clave: req.body.Clave,
    })
    await usuariodb.save()
    console.log(req.body.Correo)
    res.render('pages/index')
})

router.get('/loginprueba',  (req, res) => {
   
    res.render('pages/usuarios/loginprueba');
   })

//router.get('/listarprodductos', rutaProducto)

module.exports=router;