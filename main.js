const inputTxt = document.querySelector(".txt-encriptar");
const mensaje = document.querySelector(".txt-mensaje");
const aviso = document.querySelector("#mensaje-aviso");
const btnCopiar = document.querySelector("#btn-copiar");


function blockSpecialChar(event){
    if(!((event.keyCode >= 65) && (event.keyCode <= 90) || (event.keyCode >= 97) && (event.keyCode <= 122) || (event.keyCode >= 48) && (event.keyCode <= 57))){
       event.returnValue = false;
       alert("No se permiten caracteres especiales")
       return;
    }
    event.returnValue = true;

}




function btnEncriptar() {
    const textoEncriptado = encriptar(inputTxt.value);
    if (textoEncriptado ) {

        mensaje.value = textoEncriptado;
        mensaje.style.background="#292b36";
        inputTxt.value = "";
        btnCopiar.style.display = "block";
        aviso.style.display = "none";
        
    }
    

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;

    
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTxt.value);
    mensaje.value = textoEncriptado;
    mensaje.style.background="#292b36";
    inputTxt.value = "" 
    btnCopiar.style.display = "block"; 
    aviso.style.display = "none";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//botón copiar

function copiar() {
    
    mensaje.select();
    document.execCommand("copy");
    mensaje.value ="";
    
    alert("Texto Copiado");
}