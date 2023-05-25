class LivroDaBiblia {
    constructor (id, src, dicaSRC, respostaSRC) {
        this.id=id
        this.src=src
        this.dicaSRC=dicaSRC
        this.respostaSRC=respostaSRC
    }
    mostraLivro(){
        const livroElementoHTML = document.getElementById("livro")
        document.getElementById("nome-livro").textContent = this.id
        livroElementoHTML.src = this.src
        document.getElementById("dica").style.display="none"
        document.getElementById("dica").src = this.dicaSRC
    }
    criaImagemResposta(){
        return `<img class="draggable" draggable="true" id="${this.id}" src="${this.respostaSRC}">`
    }
    mostraRespostaCorreta(){
        const imagem = this.criaImagemResposta()
        document.getElementById('despenser-livros').innerHTML=imagem//gerando um html no javascript dentro do despenser-livros
    }
    isRespostaCerta(resposta){
        return this.id == resposta
    }
}