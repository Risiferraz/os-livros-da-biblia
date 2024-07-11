class BotaoSair {
    constructor (){
        this.html = document.getElementById("sair-salvar")
        this.html.addEventListener("click",() => this.salvaESai())
    }
    salvaESai() {
        alert("SALVANDO E SAINDO")
        const dadosSalvos = document.getElementById("dados-para-salvar").textContent
        const dadosSalvosJson = JSON.stringify(dadosSalvos)
        window.localStorage.setItem("dadosSalvos", dadosSalvosJson)
    }
    pegaDadosSalvos() {
        const dadosSalvosJson=(!!window.localStorage.getItem("dadosSalvos"))?window.localStorage.getItem("dadosSalvos"):0
        const dadosSalvos = JSON.parse(dadosSalvosJson)
        return{
            pontuacao:dadosSalvos.pontuacao
        }
    }
    escondeBotao() {
        this.html.style.display="none"
    }
    mostraBotao() {
        this.html.style.display="block"
    }
}