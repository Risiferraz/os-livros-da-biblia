class LivroDaBiblia {
    constructor (id, src, dicaSRC) {
        this.id=id
        this.src=src
        this.dicaSRC=dicaSRC
    }
    mostraLivro(){
        const livroElementoHTML = document.getElementById("livro")
        document.getElementById("nome-livro").textContent = this.id
        livroElementoHTML.src = this.src
        document.getElementById("dica").style.display="none"
        document.getElementById("dica").src = this.dicaSRC
    }
}