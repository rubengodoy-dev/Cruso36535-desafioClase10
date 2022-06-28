const formulario = document.querySelector("#nuevoProducto")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formulario);
    const producto = {
        title: formData.get('title'),
        price: formData.get('price'),
        thumbnail: formData.get('thumbnail')
    };
  

    postData('/productos', { title: producto.title, price: producto.price, thumbnail: producto.thumbnail })
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
            swal.fire("Enviado!", `El producto se ha agredado correctamente. Id ${data.id}`, "success");
        }).catch(err => {
            console.error(err);
            swal.fire("Error!", err, "error");
        });

    formulario.reset()

})



async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}