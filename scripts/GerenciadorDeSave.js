class GerenciadorDeSave {
    constructor() {
        this.html=document.getElementById("dados-salvos-json")
    }
    atualizaDadosDoSave() {
        const pontuacao= document.getElementById("pontuacao-para-salvar").textContent
        const dadosParaSalvar = {pontuacao}
        this.html.textContent=JSON.stringify(dadosParaSalvar)
        return this.html.textContent
    }
}