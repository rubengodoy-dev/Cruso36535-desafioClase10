const express = require("express")
const PORT = 8080
const app = express()
//cargo el modulo de handlebars
const handlebars = require("express-handlebars")
const path=require("path")
const productosRouter= require("./routes/productosRoutes")

app.engine("hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "index.hbs"
    }
    ))

app.set("view engine", "hbs")
app.set("views", "./views")
app.use(express.static(path.join(__dirname,"public")))


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use("/productos",productosRouter)



// app.get("/productos", (req, res) => {
//     res.render("listado", { nombre: "Ruben", apellido: "Godoy" })
// })



app.listen(PORT, (err) => {
    if (err) {
        throw new Error(`Error en servidor ${err}`)
    } else {
        console.log(`Servidor express escuchando en puerto ${PORT}`)
    }

})