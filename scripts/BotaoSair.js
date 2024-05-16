class BotaoSair {
    constructor (){
        this.html = document.getElementById("sair-salvar")
        this.html.addEventListener("click",() => this.salvaESai())
    }
    salvaESai() {
        alert("SALVANDO E SAINDO")
    }
    escondeBotao() {
        this.html.style.display="none"
    }
    mostraBotao() {
        this.html.style.display="block"
    }
}