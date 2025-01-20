let amigos = [];

function agregarAmigo(){
    const amigoImput = document.getElementById('amigo');
    const nombre = amigoImput.value.trim();
    if (nombre === '' || nombre.length === 0){
        alert('El nombre del amigo es requerido');
    }
    else {
        amigos.push(nombre);
        actualizarLista();
        amigoImput.value = '';
    }    
}
function actualizarLista() {
    const listaNombres = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Por favor, agrega al menos un nombre.');
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indiceAleatorio];
        document.getElementById('resultado').textContent = `Amigo secreto seleccionado: ${amigoSeleccionado}`;
    }
}

