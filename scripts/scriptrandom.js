
function embaralhaCards(){
    const total = this.cards.length//length = extensão, duração, quantidade, lista
    const cardEscolhido = Math.floor(Math.random() * total)
    this.card[cardEscolhido].valor
}

function sorteiaLivroDaVez() {
    const numeroAleatorio = Math.floor(Math.random() * listaDeCardsNaoSorteados.length)
    if (listaDeNumerosAleatoriosJaSorteados.includes(numeroAleatorio)) {
      sorteiaCardDaVez()
    }
    else {
      listaDeCardsNaoSorteados[numeroAleatorio].style.display = "inline";
      listaDeNumerosAleatoriosJaSorteados.push(numeroAleatorio);
    }
}