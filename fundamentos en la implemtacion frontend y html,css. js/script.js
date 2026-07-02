
let carrito=[]


function registro(){

let email=document.getElementById("email").value

let password=document.getElementById("password").value

localStorage.setItem(email,password)

alert("Registro exitoso")

}


function login(){

let email=document.getElementById("email").value

let password=document.getElementById("password").value


if(localStorage.getItem(email)==password){

alert("Bienvenido")

}else{

alert("Error")

}

}


function agregarCarrito(nombre,precio){

carrito.push({nombre,precio})

mostrarCarrito()

}


function mostrarCarrito(){

let lista=document.getElementById("listaCarrito")

lista.innerHTML=""

let total=0


carrito.forEach(p=>{

lista.innerHTML+=`<li>${p.nombre} $${p.precio}</li>`

total+=p.precio

})


document.getElementById("total").innerText="Total $"+total

}


function comprar(){

alert("Compra exitosa")

carrito=[]

mostrarCarrito()

}