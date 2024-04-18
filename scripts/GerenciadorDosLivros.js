class GerenciadorDosLivros {
    constructor(){
        this.isHabilitado = true
    }
    habilitaLivroSorteado() {
        this.isHabilitado = true
    }
    bloqueiaLivroSorteado() {
        this.isHabilitado = false
    }
    verificaSeEstaHabilitado() {
        return this.isHabilitado
    }
}
