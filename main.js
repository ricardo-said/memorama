// inicializacion de variable
let tarjetasDestapadas= 0;
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let tarjeta1 = null;
let tarjet2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
// obteniendo el elemento HTML de movimientos
let mostrarMovimientos = document.querySelector('#movimientos');
let mostarAciertos = document.querySelector('#aciertos');
let btnReiniciar = document.querySelector('.btn-reiniciar');
let btns= document.querySelectorAll('.btn-cuadros');
console.log(btns);




// boton para reiniciar
btnReiniciar.addEventListener("click", reiniciarJuego);
function reiniciarJuego() {
    btns.forEach(btn =>{
        btn.textContent= '';
        btn.disabled = false;
    })
    tarjetasDestapadas = 0; 
    mostarAciertos.innerHTML= `Aciertos: 0`;
    mostrarMovimientos.innerHTML= `Movimientos: 0`;
    aciertos=0;
    movimientos=0;
    numeros = numeros.sort(()=>{return Math.random()-.5});
    return numeros;
}
// generar el arreglo de numeros aleatorios
numeros = numeros.sort(()=>{return Math.random()-.5});


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

    // incrementar moviminetos 
    movimientos++;
    mostrarMovimientos.innerHTML= `Movimientos: ${movimientos}`;
        // 
        if (primerResultado == segundoResultado) {
            tarjetasDestapadas = 0;
            
            // aumentar aciertos
            aciertos++;
            mostarAciertos.innerHTML= `Aciertos: ${aciertos}`;
            if (aciertos == 8) {
                mostarAciertos.textContent= `Acabas de Ganar!!;`
            }
            

        }
        else{
            setTimeout(() => {
                tarjeta1.innerHTML= '';
                tarjet2.innerHTML= '';
                tarjeta1.disabled= false,
                tarjet2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
        }

    } 

}