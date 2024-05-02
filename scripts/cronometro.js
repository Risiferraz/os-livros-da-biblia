class Cronometro {
    constructor() {
        this.segundos = 0
        this.minutos = 0
        this.isCronometroAtivo = false
    }
    atualizaCronometro() {
        if (this.isCronometroAtivo) {
            this.segundos++
            if (this.segundos >= 60) {
                this.minutos++
                this.segundos = 0
            }
            if (this.minutos == 60 && this.segundos == 0) {
                alert("TEMPO ESGOTADO")
            }
            const segundosString = this.segundos <= 9 ? `0${this.segundos}` : `${this.segundos}`
            const minutosString = this.minutos <= 9 ? `0${this.minutos}` : `${this.minutos}`
            const cronometro = `${minutosString}:${segundosString}`
            document.getElementById('cronometro').textContent = cronometro
        }
    }
    pararCronometro() {
        this.isCronometroAtivo = false
    }
    iniciaCronometro() {
        this.isCronometroAtivo = true
    }
    isOtimo() {
        return this.minutos <= 35
    }
    isMuitoBom() {
        return this.minutos <= 45
    }
    isBom() {
        return this.minutos > 45
    }
}