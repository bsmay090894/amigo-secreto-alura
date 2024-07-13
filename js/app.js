let nomesSorteados = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
    let amigoAdicionado = document.getElementById("lista-amigos");
    let verificaAmigo = document.getElementById("lista-amigos").textContent;
    
    verificaAmigo = (" - " + verificaAmigo + " - ")

    if(verificaAmigo.includes(" - " + nomeAmigo + " - ") ) {
        alert("Este nome já está na lista")
        document.getElementById("nome-amigo").value = "";
        return
    }

    if(nomeAmigo == "") {
        alert("Insira um nome")
        return
    }

    if(amigoAdicionado.innerHTML == "") {
        amigoAdicionado.innerHTML = nomeAmigo;
    } else {
        amigoAdicionado.innerHTML = amigoAdicionado.innerHTML + ` - ${nomeAmigo}`;
    }

    document.getElementById("nome-amigo").value = "";
}
    
function sortear() {
    let listaParticipantes = document.getElementById("lista-amigos").textContent;
    let participantes = listaParticipantes.split(" - ");
    
    if(participantes.length < 3) {
        alert("Insira no mínimo 3 participantes")
        return[]
    }

    embaralhaNomes();
    let listaSorteio = document.getElementById("lista-sorteio")
    
    for (let i = 0; i < nomesSorteados.length; i++) {
        if(i == nomesSorteados.length - 1) {
        listaSorteio.innerHTML = listaSorteio.innerHTML + nomesSorteados[i] + ' --> ' + nomesSorteados[0] + '<br>';
        } else {
        listaSorteio.innerHTML = listaSorteio.innerHTML + nomesSorteados[i] + ' --> ' + nomesSorteados[i + 1] + '<br>';
        }
}
}

function reiniciar() {
    document.getElementById("nome-amigo").value = "";
    nomesSorteados = [];
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = "";
}

function embaralhaNomes() {
    let listaParticipantes = document.getElementById("lista-amigos").textContent;
    let participantes = listaParticipantes.split(" - ");
    let sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    let qtdParticipantes = participantes.length;
    let qtdSorteada = nomesSorteados.length;

    while(qtdParticipantes != qtdSorteada) {
        if(nomesSorteados.includes(sorteado)) {
            return embaralhaNomes();
        } else {        
            nomesSorteados.push(sorteado);                                                 
        }        
    }
}