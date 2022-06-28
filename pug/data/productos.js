class Contenedor {
    constructor() {
        this.listaProductos = []
        this.listaProductos.push({ price: 200, title: "Primer producto", thumbnail: "https://picsum.photos/200/300", id: 1 })
        this.listaProductos.push({ price: 300, title: "segundo producto", thumbnail: "https://picsum.photos/200/300", id: 2 })
        this.listaProductos.push({ price: 400, title: "tercero producto", thumbnail: "https://picsum.photos/200/300", id: 3 })

    }

    create(obje) {
        let id = 0
        if (this.listaProductos.length > 0) {
            //obtener el ultimo Id          
            id = Math.max(...this.listaProductos.map(p => p.id))
        }
        id++
        obje.id = id
        this.listaProductos.push(obje)
        return obje
    }

    update(id, obje) {
        const producto = this.getById(id)
        if (producto === null) {
            return null
        }
        else {
            let indice= this.listaProductos.findIndex(p=>p.id===producto.id)
            obje.id=id
            this.listaProductos[indice]=obje
            return obje
        }

    }

    getAll() {
        return this.listaProductos
    }

    getById(id) {
        const lista = this.getAll()
        const producto = lista.find(p => p.id == id)

        if (producto === undefined) {
            return null
        }
        else {
            return producto
        }
    }

    delete(id) {
        const producto = this.getById(id)
        if (producto === null) {
            return null
        }
        else {
            this.listaProductos = this.listaProductos.filter(p => p.id != id)
            return producto
        }
    }

}


module.exports = Contenedor