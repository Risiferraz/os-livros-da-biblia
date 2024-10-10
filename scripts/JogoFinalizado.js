class JogoFinalizado {
    constructor (){
        this.html = document.getElementById("sair-jogo-finalizado")
        this.htmlProximaFase = document.getElementById("proxima-fase")
        this.html.addEventListener("click",() => this.salvaESai())
        this.htmlProximaFase.addEventListener("click",() => this.salvaESai())
    }
    salvaESai() {
        alert("SALVANDO E SAINDO")
        const tempo = document.getElementById("mostra-tempo-final").textContent
        const pontuacao = document.getElementById("mostra-pontuacao-final").textContent
        const dadosDoJogoFinalizado = JSON.stringify({
            tempo,pontuacao
        })
        window.localStorage.setItem("dadosDoJogoFinalizado", dadosDoJogoFinalizado)
    }
    pegaDadosDoJogoFinalizado() {
        return window.localStorage.getItem("dadosDoJogoFinalizado")
    }
}