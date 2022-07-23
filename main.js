// inicializacion de variable
let tarjetasDestapadas= 0;
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let tarjeta1 = null;
let tarjet2 = null;
let primerResultado = null;
let segundoResultado = null;

// generar el arreglo de numeros aleatorios
numeros = numeros.sort(()=>{return Math.random()-.5});
console.log(numeros);

// funcion principal
function destapar(id) {
    tarjetasDestapadas++;
    
    if (tarjetasDestapadas === 1) {
        // mostrar el numero que seleccionamos
        tarjeta1 = document.getElementById(id);
        primerResultado= numeros[id];
        tarjeta1.innerHTML = primerResultado;

        // desabilitar el boton seleccionado
        // para no aumentar el cotador con el mismo
        tarjeta1.disabled = true;
    }
    else if (tarjetasDestapadas === 2) {
        tarjet2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjet2.innerHTML = segundoResultado;
        tarjet2.disabled= true;
    } 

}