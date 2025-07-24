// app.js

// Array para almacenar los nombres de los amigos
const listaAmigos = [];

/**
 * Refresca la lista de amigos en pantalla.
 */
function actualizarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';
  listaAmigos.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

/**
 * Agrega un nombre de amigo a la lista.
 * Se llama al hacer clic en "Añadir".
 */
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor ingresa un nombre válido.');
    return;
  }

  listaAmigos.push(nombre);
  input.value = '';
  actualizarLista();
}

/**
 * Sortea un amigo secreto de la lista y muestra el resultado.
 * Se llama al hacer clic en "Sortear amigo".
 */
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert('La lista está vacía. Añade al menos un nombre.');
    return;
  }

  // Índice aleatorio entre 0 y listaAmigos.length - 1
  const idx = Math.floor(Math.random() * listaAmigos.length);
  const ganador = listaAmigos[idx];

  const resultadoUl = document.getElementById('resultado');
  resultadoUl.innerHTML = '';               // Limpiar cualquier resultado previo

  const li = document.createElement('li');
  li.textContent = `🎉 ¡El amigo secreto es: ${ganador}!`;
  resultadoUl.appendChild(li);
}
