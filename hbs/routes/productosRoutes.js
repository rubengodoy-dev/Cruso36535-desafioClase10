const express = require("express")
const { Router } = express
const router = Router()

const Contenedor = require("../data/productos")
const data = new Contenedor()

//devuelve todos los productos
router.get('/', (req, res) => {
    let productos = data.getAll()
    res.status(200).render("listado", { array: productos })   
});



//recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/', (req, res) => {   
    let mensaje = req.body
    let producto = data.create(mensaje)
    if (producto != null) {
        res.status(200).json({id:producto.id})
    } 
});

module.exports = router;


