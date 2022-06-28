const express = require("express")
const PORT = 8080
const app = express()

const path=require("path")
const productosRouter= require("./routes/productosRoutes")


app.set("view engine","pug")
app.set("views", "./views")



app.use(express.static(path.join(__dirname,"public")))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

app.use("/productos",productosRouter)

app.listen(PORT, (err) => {
    if (err) {
        throw new Error(`Error en servidor ${err}`)
    } else {
        console.log(`Servidor express escuchando en puerto ${PORT}`)
    }

})