var cantidad = 0;
var precioProducto = 18;
var precioTotal = 0;
function AgregarProducto() {
    cantidad = cantidad + 1;
    console.log(cantidad);
    precioTotal = cantidad*precioProducto;
    $("#IblCantidad").text(Cantidad);
    localStorage.setItem("PrecioTotal",precioTotal );
    localStorage.setItem("cantidad",cantidad );
}
function QuitarProducto() {
    cantidad = cantidad - 1;
    console.log(cantidad);
    precioTotal = cantidad*precioProducto;
    $("#IblCantidad").text(Cantidad);
    localStorage.setItem("PrecioTotal",precioTotal );
    localStorage.setItem("cantidad",cantidad );
}
