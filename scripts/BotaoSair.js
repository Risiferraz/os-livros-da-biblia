class BotaoSair {
    constructor (){
        this.html = document.getElementById("sair-salvar")
        this.html.addEventListener("click",() => this.salvaESai())
    }
    salvaESai(pontuacaoDoJogador) {
        alert("SALVANDO E SAINDO")
        window.localStorage.setItem("pontuacaoDoJogador",pontuacaoDoJogador)
    }
    escondeBotao() {
        this.html.style.display="none"
    }
    mostraBotao() {
        this.html.style.display="block"
    }
}