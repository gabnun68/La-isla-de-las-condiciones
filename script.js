function mostrarDesafio(numero) {
  const siguiente = document.getElementById("desafio" + numero);
  if (siguiente) {
    siguiente.style.display = "block";
    window.location.hash = "#desafio" + numero;
  }
}
