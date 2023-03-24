const listaDeLivros = [
  new LivroDaBiblia("genesis", "/versiculos/genesis.jpg"),
  new LivroDaBiblia("exodo", "/versiculos/exodo.jpg"),
  new LivroDaBiblia("levitico", "/versiculos/levitico.jpg"),
  new LivroDaBiblia("numeros", "/versiculos/numeros.jpg"),
  new LivroDaBiblia("deuteronomio", "/versiculos/deuteronomio.jpg"),
  new LivroDaBiblia("josue", "/versiculos/josue.jpg"),
  new LivroDaBiblia("juizes", "/versiculos/juizes.jpg"),
  new LivroDaBiblia("rute", "/versiculos/rute.jpg"),
  new LivroDaBiblia("1samuel", "/versiculos/1samuel.jpg"),
  new LivroDaBiblia("2samuel", "/versiculos/2samuel.jpg"),
  new LivroDaBiblia("1reis", "/versiculos/1reis.jpg"),
  new LivroDaBiblia("2reis", "/versiculos/2reis.jpg"),
  new LivroDaBiblia("1cronicas", "/versiculos/1cronicas.jpg"),
  new LivroDaBiblia("2cronicas", "/versiculos/2cronicas.jpg"),
  new LivroDaBiblia("esdras", "/versiculos/esdras.jpg"),
  new LivroDaBiblia("neemias", "/versiculos/neemias.jpg"),
  new LivroDaBiblia("tobias", "/versiculos/tobias.jpg"),
  new LivroDaBiblia("judite", "/versiculos/judite.jpg"),
  new LivroDaBiblia("ester", "/versiculos/ester.jpg"),
  new LivroDaBiblia("jo", "/versiculos/jo.jpg"),
  new LivroDaBiblia("salmos", "/versiculos/salmos.jpg"),
  new LivroDaBiblia("1macabeus", "/versiculos/1macabeus.jpg"),
  new LivroDaBiblia("2macabeus", "/versiculos/2macabeus.jpg"),
  new LivroDaBiblia("proverbios", "/versiculos/proverbios.jpg"),
  new LivroDaBiblia("eclesiastes", "/versiculos/eclesiastes.jpg"),
  new LivroDaBiblia("cantares", "/versiculos/cantares.jpg"),
  new LivroDaBiblia("sabedoria", "/versiculos/sabedoria.jpg"),
  new LivroDaBiblia("eclesiastico", "/versiculos/eclesiastico.jpg"),
  new LivroDaBiblia("isaias", "/versiculos/isaias.jpg"),
  new LivroDaBiblia("jeremias", "/versiculos/jeremias.jpg"),
  new LivroDaBiblia("lamentacoes", "/versiculos/lamentacoes.jpg"),
  new LivroDaBiblia("baruque", "/versiculos/baruque.jpg"),
  new LivroDaBiblia("ezequiel", "/versiculos/ezequiel.jpg"),
  new LivroDaBiblia("daniel", "/versiculos/daniel.jpg"),
  new LivroDaBiblia("oseias", "/versiculos/oseias.jpg"),
  new LivroDaBiblia("joel", "/versiculos/joel.jpg"),
  new LivroDaBiblia("amos", "/versiculos/amos.jpg"),
  new LivroDaBiblia("obadias", "/versiculos/obadias.jpg"),
  new LivroDaBiblia("jonas", "/versiculos/jonas.jpg"),
  new LivroDaBiblia("miqueias", "/versiculos/miqueias.jpg"),
  new LivroDaBiblia("naum", "/versiculos/naum.jpg"),
  new LivroDaBiblia("habacuque", "/versiculos/habacuque.jpg"),
  new LivroDaBiblia("sofonias", "/versiculos/sofonias.jpg"),
  new LivroDaBiblia("ageu", "/versiculos/ageu.jpg"),
  new LivroDaBiblia("zacarias", "/versiculos/zacarias.jpg"),
  new LivroDaBiblia("malaquias", "/versiculos/malaquias.jpg"),
  new LivroDaBiblia("mateus", "/versiculos/mateus.jpg"),
  new LivroDaBiblia("marcos", "/versiculos/marcos.jpg"),
  new LivroDaBiblia("lucas", "/versiculos/lucas.jpg"),
  new LivroDaBiblia("joao", "/versiculos/joao.jpg"),
  new LivroDaBiblia("atos", "/versiculos/atos.jpg"),
  new LivroDaBiblia("romanos", "/versiculos/romanos.jpg"),
  new LivroDaBiblia("1corintios", "/versiculos/1corintios.jpg"),
  new LivroDaBiblia("2corintios", "/versiculos/2corintios.jpg"),
  new LivroDaBiblia("galatas", "/versiculos/galatas.jpg"),
  new LivroDaBiblia("efesios", "/versiculos/efesios.jpg"),
  new LivroDaBiblia("filipenses", "/versiculos/filipenses.jpg"),
  new LivroDaBiblia("colossenses", "/versiculos/colossenses.jpg"),
  new LivroDaBiblia("1tessalonicenses", "/versiculos/1tessalonicenses.jpg"),
  new LivroDaBiblia("2tessalonicenses", "/versiculos/2tessalonicenses.jpg"),
  new LivroDaBiblia("1timoteo", "/versiculos/1timoteo.jpg"),
  new LivroDaBiblia("2timoteo", "/versiculos/2timoteo.jpg"),
  new LivroDaBiblia("tito", "/versiculos/tito.jpg"),
  new LivroDaBiblia("filemom", "/versiculos/filemom.jpg"),
  new LivroDaBiblia("hebreus", "/versiculos/hebreus.jpg"),
  new LivroDaBiblia("tiago", "/versiculos/tiago.jpg"),
  new LivroDaBiblia("1pedro", "/versiculos/1pedro.jpg"),
  new LivroDaBiblia("2pedro", "/versiculos/2pedro.jpg"),
  new LivroDaBiblia("1joao", "/versiculos/1joao.jpg"),
  new LivroDaBiblia("2joao", "/versiculos/2joao.jpg"),
  new LivroDaBiblia("3joao", "/versiculos/3joao.jpg"),
  new LivroDaBiblia("judas", "/versiculos/judas.jpg"),
  new LivroDaBiblia("apocalipse", "/versiculos/apocalipse.jpg")
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
    document.getElementById("nome-livro").textContent = listaDeLivros[numeroAleatorio].id
    livro.src = listaDeLivros[numeroAleatorio].src
    listaDeNumerosAleatoriosJaSorteados.push(numeroAleatorio);
  }
}


