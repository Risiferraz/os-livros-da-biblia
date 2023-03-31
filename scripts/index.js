const listaDeLivros = [
  new LivroDaBiblia("genesis", "/versiculos/genesis.jpg", "/dicas/genesis.png" ),
  new LivroDaBiblia("exodo", "/versiculos/exodo.jpg", "/dicas/exodo.png" ),
  new LivroDaBiblia("levitico", "/versiculos/levitico.jpg", "/dicas/levitico.png" ),
  new LivroDaBiblia("numeros", "/versiculos/numeros.jpg", "/dicas/numeros.png" ),
  new LivroDaBiblia("deuteronomio", "/versiculos/deuteronomio.jpg", "/dicas/deuteronomio.png" ),
  new LivroDaBiblia("josue", "/versiculos/josue.jpg", "/dicas/josue.png" ),
  new LivroDaBiblia("juizes", "/versiculos/juizes.jpg", "/dicas/juizes.png" ),
  new LivroDaBiblia("rute", "/versiculos/rute.jpg", "/dicas/rute.png" ),
  new LivroDaBiblia("1samuel", "/versiculos/1samuel.jpg", "/dicas/1samuel.png" ),
  new LivroDaBiblia("2samuel", "/versiculos/2samuel.jpg", "/dicas/2samuel.png" ),
  new LivroDaBiblia("1reis", "/versiculos/1reis.jpg", "/dicas/1reis.png" ),
  new LivroDaBiblia("2reis", "/versiculos/2reis.jpg", "/dicas/2reis.png" ),
  new LivroDaBiblia("1cronicas", "/versiculos/1cronicas.jpg", "/dicas/1cronicas.png" ),
  new LivroDaBiblia("2cronicas", "/versiculos/2cronicas.jpg", "/dicas/2cronicas.png" ),
  new LivroDaBiblia("esdras", "/versiculos/esdras.jpg", "/dicas/esdras.png" ),
  new LivroDaBiblia("neemias", "/versiculos/neemias.jpg", "/dicas/neemias.png" ),
  new LivroDaBiblia("tobias", "/versiculos/tobias.jpg", "/dicas/tobias.png" ),
  new LivroDaBiblia("judite", "/versiculos/judite.jpg", "/dicas/judite.png" ),
  new LivroDaBiblia("ester", "/versiculos/ester.jpg", "/dicas/ester.png" ),
  new LivroDaBiblia("jo", "/versiculos/jo.jpg", "/dicas/jo.png" ),
  new LivroDaBiblia("salmos", "/versiculos/salmos.jpg", "/dicas/salmos.png" ),
  new LivroDaBiblia("1macabeus", "/versiculos/1macabeus.jpg", "/dicas/1macabeus.png" ),
  new LivroDaBiblia("2macabeus", "/versiculos/2macabeus.jpg", "/dicas/2macabeus.png" ),
  new LivroDaBiblia("proverbios", "/versiculos/proverbios.jpg", "/dicas/proverbios.png" ),
  new LivroDaBiblia("eclesiastes", "/versiculos/eclesiastes.jpg", "/dicas/eclesiastes.png" ),
  new LivroDaBiblia("cantares", "/versiculos/cantares.jpg", "/dicas/cantares.png" ),
  new LivroDaBiblia("sabedoria", "/versiculos/sabedoria.jpg", "/dicas/sabedoria.png" ),
  new LivroDaBiblia("eclesiastico", "/versiculos/eclesiastico.jpg", "/dicas/eclesiastico.png" ),
  new LivroDaBiblia("isaias", "/versiculos/isaias.jpg", "/dicas/isaias.png" ),
  new LivroDaBiblia("jeremias", "/versiculos/jeremias.jpg", "/dicas/jeremias.png" ),
  new LivroDaBiblia("lamentacoes", "/versiculos/lamentacoes.jpg", "/dicas/lamentacoes.png" ),
  new LivroDaBiblia("baruque", "/versiculos/baruque.jpg", "/dicas/baruque.png" ),
  new LivroDaBiblia("ezequiel", "/versiculos/ezequiel.jpg", "/dicas/ezequiel.png" ),
  new LivroDaBiblia("daniel", "/versiculos/daniel.jpg", "/dicas/daniel.png" ),
  new LivroDaBiblia("oseias", "/versiculos/oseias.jpg", "/dicas/oseias.png" ),
  new LivroDaBiblia("joel", "/versiculos/joel.jpg", "/dicas/joel.png" ),
  new LivroDaBiblia("amos", "/versiculos/amos.jpg", "/dicas/amos.png" ),
  new LivroDaBiblia("obadias", "/versiculos/obadias.jpg", "/dicas/obadias.png" ),
  new LivroDaBiblia("jonas", "/versiculos/jonas.jpg", "/dicas/jonas.png" ),
  new LivroDaBiblia("miqueias", "/versiculos/miqueias.jpg", "/dicas/miqueias.png" ),
  new LivroDaBiblia("naum", "/versiculos/naum.jpg", "/dicas/naum.png" ),
  new LivroDaBiblia("habacuque", "/versiculos/habacuque.jpg", "/dicas/habacuque.png" ),
  new LivroDaBiblia("sofonias", "/versiculos/sofonias.jpg", "/dicas/sofonias.png" ),
  new LivroDaBiblia("ageu", "/versiculos/ageu.jpg", "/dicas/ageu.png" ),
  new LivroDaBiblia("zacarias", "/versiculos/zacarias.jpg", "/dicas/zacarias.png" ),
  new LivroDaBiblia("malaquias", "/versiculos/malaquias.jpg", "/dicas/malaquias.png" ),
  new LivroDaBiblia("mateus", "/versiculos/mateus.jpg", "/dicas/mateus.png" ),
  new LivroDaBiblia("marcos", "/versiculos/marcos.jpg", "/dicas/marcos.png" ),
  new LivroDaBiblia("lucas", "/versiculos/lucas.jpg", "/dicas/lucas.png" ),
  new LivroDaBiblia("joao", "/versiculos/joao.jpg", "/dicas/joao.png" ),
  new LivroDaBiblia("atos", "/versiculos/atos.jpg", "/dicas/atos.png" ),
  new LivroDaBiblia("romanos", "/versiculos/romanos.jpg", "/dicas/romanos.png" ),
  new LivroDaBiblia("1corintios", "/versiculos/1corintios.jpg", "/dicas/1corintios.png" ),
  new LivroDaBiblia("2corintios", "/versiculos/2corintios.jpg", "/dicas/2corintios.png" ),
  new LivroDaBiblia("galatas", "/versiculos/galatas.jpg", "/dicas/galatas.png" ),
  new LivroDaBiblia("efesios", "/versiculos/efesios.jpg", "/dicas/efesios.png" ),
  new LivroDaBiblia("filipenses", "/versiculos/filipenses.jpg", "/dicas/colossenses.png" ),
  new LivroDaBiblia("colossenses", "/versiculos/colossenses.jpg", "/dicas/filipenses.png" ),
  new LivroDaBiblia("1tessalonicenses", "/versiculos/1tessalonicenses.jpg", "/dicas/1tessalonicenses.png" ),
  new LivroDaBiblia("2tessalonicenses", "/versiculos/2tessalonicenses.jpg", "/dicas/2tessalonicenses.png" ),
  new LivroDaBiblia("1timoteo", "/versiculos/1timoteo.jpg", "/dicas/1timoteo.png" ),
  new LivroDaBiblia("2timoteo", "/versiculos/2timoteo.jpg", "/dicas/2timoteo.png" ),
  new LivroDaBiblia("tito", "/versiculos/tito.jpg", "/dicas/tito.png" ),
  new LivroDaBiblia("filemom", "/versiculos/filemom.jpg", "/dicas/filemom.png" ),
  new LivroDaBiblia("hebreus", "/versiculos/hebreus.jpg", "/dicas/hebreus.png" ),
  new LivroDaBiblia("tiago", "/versiculos/tiago.jpg", "/dicas/tiago.png" ),
  new LivroDaBiblia("1pedro", "/versiculos/1pedro.jpg", "/dicas/1pedro.png" ),
  new LivroDaBiblia("2pedro", "/versiculos/2pedro.jpg", "/dicas/2pedro.png" ),
  new LivroDaBiblia("1joao", "/versiculos/1joao.jpg", "/dicas/1joao.png" ),
  new LivroDaBiblia("2joao", "/versiculos/2joao.jpg", "/dicas/2joao.png" ),
  new LivroDaBiblia("3joao", "/versiculos/3joao.jpg", "/dicas/3joao.png" ),
  new LivroDaBiblia("judas", "/versiculos/judas.jpg", "/dicas/judas.png" ),
  new LivroDaBiblia("apocalipse", "/versiculos/apocalipse.jpg", "/dicas/apocalipse.png" ),
]
const listaDeNumerosAleatoriosJaSorteados = []

// X-X-X-X-X-X-X-X-X-X-X- PÁGINA 1-X-X-X-X-X-X-X-X-X-X-X
function clicar() {
  document.getElementById("pagina1").style.display = "none"
  document.getElementById("pagina2").style.display = "grid"
  cronometro.iniciaCronometro()
  // sorteiaCardDaVez()
  // botaoDispenserCards.bloqueiaBotao()
}

// X-X-X-X-X-X-X-X-X-X-X- PÁGINA 2 -X-X-X-X-X-X-X-X-X-X-X
const livro = document.getElementById("livro")
livro.addEventListener("click",()=>{
sorteiaLivroDaVez()
})

document.getElementById("botao-despenser-dicas")
.addEventListener("click",()=>{
document.getElementById("dica").style.display="block"
})

const cronometro = new Cronometro()
setInterval(() => {
  cronometro.atualizaCronometro()
}, 1000);

function sorteiaLivroDaVez() {
  const numeroAleatorio = Math.floor(Math.random() * listaDeLivros.length)
  if (listaDeNumerosAleatoriosJaSorteados.includes(numeroAleatorio)) {
    sorteiaLivroDaVez()
  }
  else {
    listaDeLivros[numeroAleatorio].mostraLivro()
    listaDeNumerosAleatoriosJaSorteados.push(numeroAleatorio);
  }
}


