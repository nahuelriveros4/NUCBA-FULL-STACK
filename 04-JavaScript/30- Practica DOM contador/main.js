const resultado = document.getElementById('resultado')
const disminuir = document.querySelector('.btn-disminuir')
const aumentar = document.querySelector('.btn-aumentar')
const reset = document.querySelector('.btn-reset')

let contador =0;

aumentar.addEventListener('click',() =>{
  contador ++;
  actualizaResultado()
})

disminuir.addEventListener('click', () =>{
  contador --;
  if (contador < 0){
    contador=0;
    alert('El contador no puede ser menor a 0')
  }
  actualizaResultado()
})

reset.addEventListener('click',()=>{
  contador = 0;
  actualizaResultado()
})


function actualizaResultado (){
  resultado.innerHTML=contador
}