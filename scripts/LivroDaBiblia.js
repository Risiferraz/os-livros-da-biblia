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
        document.getElementById(this.id).style.display="block"
    }
}