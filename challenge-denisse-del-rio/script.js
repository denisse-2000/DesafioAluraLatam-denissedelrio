let array = []; 
let textoUsuario = document.getElementById('texto__ingresado');
let textoUnido = '';

function cajaMensajeUsuarioEncriptar(){ 
    textoUsuario = document.getElementById('texto__ingresado').value;
    console.log(textoUsuario);
    nLetras = textoUsuario.length;
    console.log(nLetras);

    if(/[A-Z0-9]/.test(textoUsuario)){ 
        alert('Por favor, ingrese solo letras minúsculas y sin números.'); 
        return; 
    } 
 
    if(textoUsuario != ""){
            let longitud = array.length;
            console.log(array);
            console.log(longitud);

    }else{
        alert('Ingrese alguna palabra');
    }

    for (let i = 0; i < nLetras; i++){
        let caracter = textoUsuario[i]; 

        if(caracter == 'a'){
            array.push("ai"); 
        }
        else if(caracter == 'e'){ 
            array.push("enter"); 
        

        }else if(caracter == 'i'){ 
            array.push("imes"); 

        }else if(caracter == 'o'){ 
            array.push("ober"); 

        }else if(caracter == 'u'){ 
            array.push("ufat"); 

        }else{
            array.push(caracter);
        }
        
    }
    console.log(array);
    textoUnido = array.join('');
    console.log(textoUnido);
    //Se llama a la función para mostrar el mensaje encriptado
    mensajeEncriptado('p3', textoUnido);
    limpiarCaja();
}

function cajaMensajeUsuarioDesencriptar(){ 
    textoUsuario = document.getElementById('texto__ingresado').value;
    let textoUsuario2 = textoUsuario;

    if(/[A-Z0-9]/.test(textoUsuario2)){ 
        alert('Por favor, ingrese solo letras minúsculas y sin números.'); 
        return; 
    }

    textoUsuario2 = textoUsuario2.replace(/ai/g, 'a');
    textoUsuario2 = textoUsuario2.replace(/enter/g, 'e');
    textoUsuario2 = textoUsuario2.replace(/imes/g, 'i');
    textoUsuario2 = textoUsuario2.replace(/ober/g, 'o');
    textoUsuario2 = textoUsuario2.replace(/ufat/g, 'u');

    console.log(textoUsuario2);
    mensajeEncriptado('p3', textoUsuario2);
    limpiarCaja();

}

function limpiarCaja(){
    document.getElementById('texto__ingresado').value ='';
}

function mensajeEncriptado(elementoHTML, mensaje){
    let msjEncriptado = document.querySelector(elementoHTML);
    msjEncriptado.innerHTML = mensaje;
    mostrarResultado(mensaje);
    return;
}


function mostrarResultado(texto) {
    const resultadoElemento = document.getElementById('texto__copiar');
    const contenedorMono = document.querySelector('.contenedor__mono');
    const contenedorParrafo = document.querySelector('.contenedor__parrafo');

    // Mostrar el resultado
    resultadoElemento.textContent = texto;

    // Verificar si hay texto en el resultado
    if (texto) {
        // Ocultar contenedor__mono y contenedor__parrafo
        contenedorMono.classList.add('oculto');
        contenedorParrafo.classList.add('oculto');
    } else {
        // Mostrar contenedor__mono y contenedor__parrafo si no hay resultado
        contenedorMono.classList.remove('oculto');
        contenedorParrafo.classList.remove('oculto');
    }
}


function copiarTexto() {
    // Obtén el texto que está actualmente en el elemento HTML
    let textoUsuario2 = document.querySelector('p3').textContent; // Asegúrate de que '#p3' sea el ID correcto
    
    // Copia el texto al portapapeles
    navigator.clipboard.writeText(textoUsuario2)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar al portapapeles");
        });
}