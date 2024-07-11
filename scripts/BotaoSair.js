class BotaoSair {
    constructor (){
        this.html = document.getElementById("sair-salvar")
        this.html.addEventListener("click",() => this.salvaESai())
    }
    salvaESai() {
        alert("SALVANDO E SAINDO")
        const dadosSalvos = document.getElementById("dados-para-salvar").textContent
        window.localStorage.setItem("dadosSalvos", dadosSalvos)
    }
    pegaDadosSalvos() {
        const pontuacao=(!!window.localStorage.getItem("dadosSalvos"))?window.localStorage.getItem("dadosSalvos"):0
        return{
            pontuacao
        }
    }
    escondeBotao() {
        this.html.style.display="none"
    }
    mostraBotao() {
        this.html.style.display="block"
    }
}