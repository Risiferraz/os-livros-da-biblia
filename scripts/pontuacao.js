class Pontuacao {
    constructor(idPontuacao) {
        this.idPontuacao = idPontuacao
        this.elementoHtml = document.getElementById(idPontuacao)
        this.pontosDoJogador = 0
        this.usouDica = false
        this.errou = false
    }
    atualizaPontuacao() {
        this.elementoHtml.textContent = this.pontosDoJogador
    }
    pegaPontoParaAcertoSemDica() {
        return 10
    }
    pegaPontoParaAcertoComDica() {
        return 5
    }
    pegaPontoParaAcertoComErro() {
        return 2
    }
    passandoParaNovoLivro() {
        this.usouDica = false
        this.errou = false
    }
    adicionaPontuacaoCorreta() {
        this.pontosDoJogador += this.pegaPontuacaoCerta()
        this.atualizaPontuacao()
        this.passandoParaNovoLivro()
    }
    usandoDica() {
        this.usouDica = true
    }
    pegaPontuacaoCerta() {
        if (!this.usouDica && !this.errou) {
            return this.pegaPontoParaAcertoSemDica()
        }
        else if (this.usouDica && !this.errou) {
            return this.pegaPontoParaAcertoComDica()
        }
        else {
            return this.pegaPontoParaAcertoComErro()
        }
    }
    errando() {
        this.errou = true
    }
}
