var cantidad = 0;
var PrecioTotal = 0;


$( document ).ready(function() {


    cantidad = localStorage.getItem("cantidad");
    PrecioTotal = localStorage.getItem("PrecioTotal"); 

    console.log("cantidad",);
    console.log("PrecioTotal",);

    $("#IblCantidad").text(cantidad);
    $("#IblPrecio").text(PrecioTotal);
});