let amigos = [];

function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);  
   elementoHTML.innerHTML = texto;  
}

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    
    if(nombreAmigo === ''){
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        limpiarCaja();
    }
}

    function limpiarCaja() {
        document.getElementById('amigo').value = '';
    }
    function actualizarListaAmigos() {
        let listaHTML = '';
    amigos.forEach((amigo, index) => {
        listaHTML += `<li>${amigo}</li>`;
    });
    
    // Mostrar en el elemento con id "listaAmigos"
    document.getElementById('listaAmigos').innerHTML = listaHTML;
}

    function sortearAmigo(){
        if (amigos.length < 2) {
            alert("Debe agregar al menos 2 amigos para sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

         document.getElementById('resultado').innerHTML = 
        `🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>!`;

    }

    function condicionesIniciales(){
        asignarTextoElemento('h1', 'Amigo Secreto');
        asignarTextoElemento('.section-title', 'Digite el nombre de sus amigos');
        asignarTextoElemento('.texto__parrafo', '');
    }
// Inicializar la aplicación
condicionesIniciales();