function encriptar() {
  var mensaje = document.getElementById("inputTexto").value.toLowerCase();
  var mensajeEncriptado = mensaje
    .replace(/e/gim, "enter")
    .replace(/i/gim, "imes")
    .replace(/a/gim, "ai")
    .replace(/o/gim, "ober")
    .replace(/u/gim, "ufat");
  // i => afecta mayusculas y minusculas
  // g => afecta toda la línea u oracón
  // m => afecta multilíneas o párrafos

  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerText = mensajeEncriptado;
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar() {
  var mensajeEncriptado = document
    .getElementById("inputTexto")
    .value.toLowerCase();
  var mensaje = mensajeEncriptado
    .replace(/enter/gim, "e")
    .replace(/imes/gim, "i")
    .replace(/ai/gim, "a")
    .replace(/ober/gim, "o")
    .replace(/ufat/gim, "u");
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerText = mensaje;
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar() {
  var mensaje = document.querySelector("#texto2");
  mensaje.select();
  document.execCommand("copy");
}
