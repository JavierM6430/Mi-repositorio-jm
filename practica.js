let contador = 0

const incrementarBoton = document.getElementById('incrementar');
const restablecerBoton = document.getElementById('restablecer');
const contadorElemento = document.getElementById('contador')

incrementarBoton.addEventListener('click', () => {
    contador++
    contadorElemento.textContent = contador;
})

restablecerBoton.addEventListener('click', () => {
    contador = 0;
    contadorElemento.textContent = contador;
})