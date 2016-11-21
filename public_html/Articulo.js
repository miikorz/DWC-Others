function Articulo(id, nombre, descripcion, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
}

function Carrito(fecha, cliente) {
    this.fecha = fecha;
    this.cliente = cliente;
    this.articulos = [];
    this.total = 0;
}

Carrito.prototype.anyade = function (articulo) {
    this.articulos.push(articulo);
};

Carrito.prototype.mostrar = function () {
    ticket = "fecha: " + this.fecha + "\n";
    ticket += "Cliente: " + this.cliente + "\n";
    ticket += " Articulo en carrito \n";

    for (var i = 0; i < this.articulos.length; i++) {
        ticket += "id: " + this.articulos[i].id + "\n" + "nombre: " + this.articulos[i].nombre + "\n" + "Precio: " + this.articulos[i].precio + "\n";
    }
    alert(ticket);
};

Carrito.prototype.totalCarrito = function () {
    total = 0;
    for (var i = 0; i < this.articulos.length; i++) {
        total += parseInt(this.articulos[i].precio);
    }
    alert("El total del carrito es"+total);
}