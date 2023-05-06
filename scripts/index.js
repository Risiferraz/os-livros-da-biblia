const listaDeLivros = [
  new LivroDaBiblia("genesis", "/versiculos/genesis.jpg", "/dicas/genesis.png", "/livros/gn.png" ),
  new LivroDaBiblia("exodo", "/versiculos/exodo.jpg", "/dicas/exodo.png", "/livros/ex.png" ),
  new LivroDaBiblia("levitico", "/versiculos/levitico.jpg", "/dicas/levitico.png", "/livros/lv.png" ),
  new LivroDaBiblia("numeros", "/versiculos/numeros.jpg", "/dicas/numeros.png", "/livros/nm.png" ),
  new LivroDaBiblia("deuteronomio", "/versiculos/deuteronomio.jpg", "/dicas/deuteronomio.png", "/livros/dt.png" ),
  new LivroDaBiblia("josue", "/versiculos/josue.jpg", "/dicas/josue.png", "/livros/js.png" ),
  new LivroDaBiblia("juizes", "/versiculos/juizes.jpg", "/dicas/juizes.png", "/livros/jz.png" ),
  new LivroDaBiblia("rute", "/versiculos/rute.jpg", "/dicas/rute.png", "/livros/rt.png" ),
  new LivroDaBiblia("1samuel", "/versiculos/1samuel.jpg", "/dicas/1samuel.png", "/livros/1sm.png" ),
  new LivroDaBiblia("2samuel", "/versiculos/2samuel.jpg", "/dicas/2samuel.png", "/livros/2sm.png" ),
  new LivroDaBiblia("1reis", "/versiculos/1reis.jpg", "/dicas/1reis.png", "/livros/1rs.png" ),
  new LivroDaBiblia("2reis", "/versiculos/2reis.jpg", "/dicas/2reis.png", "/livros/2rs.png" ),
  new LivroDaBiblia("1cronicas", "/versiculos/1cronicas.jpg", "/dicas/1cronicas.png", "/livros/1cr.png" ),
  new LivroDaBiblia("2cronicas", "/versiculos/2cronicas.jpg", "/dicas/2cronicas.png", "/livros/2cr.png" ),
  new LivroDaBiblia("esdras", "/versiculos/esdras.jpg", "/dicas/esdras.png", "/livros/ed.png" ),
  new LivroDaBiblia("neemias", "/versiculos/neemias.jpg", "/dicas/neemias.png", "/livros/ne.png" ),
  new LivroDaBiblia("tobias", "/versiculos/tobias.jpg", "/dicas/tobias.png", "/livros/tobias.png" ),
  new LivroDaBiblia("judite", "/versiculos/judite.jpg", "/dicas/judite.png", "/livros/judite.png" ),
  new LivroDaBiblia("ester", "/versiculos/ester.jpg", "/dicas/ester.png", "/livros/et.png" ),
  new LivroDaBiblia("jo", "/versiculos/jo.jpg", "/dicas/jo.png", "/livros/jo.png" ),
  new LivroDaBiblia("salmos", "/versiculos/salmos.jpg", "/dicas/salmos.png", "/livros/sl.png" ),
  new LivroDaBiblia("1macabeus", "/versiculos/1macabeus.jpg", "/dicas/1macabeus.png", "/livros/1macabeus.png" ),
  new LivroDaBiblia("2macabeus", "/versiculos/2macabeus.jpg", "/dicas/2macabeus.png", "/livros/2macabeus.png" ),
  new LivroDaBiblia("proverbios", "/versiculos/proverbios.jpg", "/dicas/proverbios.png", "/livros/pv.png" ),
  new LivroDaBiblia("eclesiastes", "/versiculos/eclesiastes.jpg", "/dicas/eclesiastes.png", "/livros/ec.png" ),
  new LivroDaBiblia("cantares", "/versiculos/cantares.jpg", "/dicas/cantares.png", "/livros/ct.png" ),
  new LivroDaBiblia("sabedoria", "/versiculos/sabedoria.jpg", "/dicas/sabedoria.png", "/livros/sabedoria.png" ),
  new LivroDaBiblia("eclesiastico", "/versiculos/eclesiastico.jpg", "/dicas/eclesiastico.png", "/livros/eclesiastico.png" ),
  new LivroDaBiblia("isaias", "/versiculos/isaias.jpg", "/dicas/isaias.png", "/livros/is.png" ),
  new LivroDaBiblia("jeremias", "/versiculos/jeremias.jpg", "/dicas/jeremias.png", "/livros/jr.png" ),
  new LivroDaBiblia("lamentacoes", "/versiculos/lamentacoes.jpg", "/dicas/lamentacoes.png", "/livros/lm.png" ),
  new LivroDaBiblia("baruque", "/versiculos/baruque.jpg", "/dicas/baruque.png", "/livros/baruque.png" ),
  new LivroDaBiblia("ezequiel", "/versiculos/ezequiel.jpg", "/dicas/ezequiel.png", "/livros/ez.png" ),
  new LivroDaBiblia("daniel", "/versiculos/daniel.jpg", "/dicas/daniel.png", "/livros/dn.png" ),
  new LivroDaBiblia("oseias", "/versiculos/oseias.jpg", "/dicas/oseias.png", "/livros/os.png" ),
  new LivroDaBiblia("joel", "/versiculos/joel.jpg", "/dicas/joel.png", "/livros/jl.png" ),
  new LivroDaBiblia("amos", "/versiculos/amos.jpg", "/dicas/amos.png", "/livros/am.png" ),
  new LivroDaBiblia("obadias", "/versiculos/obadias.jpg", "/dicas/obadias.png", "/livros/ob.png" ),
  new LivroDaBiblia("jonas", "/versiculos/jonas.jpg", "/dicas/jonas.png", "/livros/jn.png" ),
  new LivroDaBiblia("miqueias", "/versiculos/miqueias.jpg", "/dicas/miqueias.png", "/livros/mq.png" ),
  new LivroDaBiblia("naum", "/versiculos/naum.jpg", "/dicas/naum.png", "/livros/na.png" ),
  new LivroDaBiblia("habacuque", "/versiculos/habacuque.jpg", "/dicas/habacuque.png", "/livros/hc.png" ),
  new LivroDaBiblia("sofonias", "/versiculos/sofonias.jpg", "/dicas/sofonias.png", "/livros/sf.png" ),
  new LivroDaBiblia("ageu", "/versiculos/ageu.jpg", "/dicas/ageu.png", "/livros/ag.png" ),
  new LivroDaBiblia("zacarias", "/versiculos/zacarias.jpg", "/dicas/zacarias.png", "/livros/zc.png" ),
  new LivroDaBiblia("malaquias", "/versiculos/malaquias.jpg", "/dicas/malaquias.png", "/livros/ml.png" ),
  new LivroDaBiblia("mateus", "/versiculos/mateus.jpg", "/dicas/mateus.png", "/livros/mt.png" ),
  new LivroDaBiblia("marcos", "/versiculos/marcos.jpg", "/dicas/marcos.png", "/livros/mc.png" ),
  new LivroDaBiblia("lucas", "/versiculos/lucas.jpg", "/dicas/lucas.png", "/livros/lc.png" ),
  new LivroDaBiblia("joao", "/versiculos/joao.jpg", "/dicas/joao.png", "/livros/joao.png" ),
  new LivroDaBiblia("atos", "/versiculos/atos.jpg", "/dicas/atos.png", "/livros/at.png" ),
  new LivroDaBiblia("romanos", "/versiculos/romanos.jpg", "/dicas/romanos.png", "/livros/rm.png" ),
  new LivroDaBiblia("1corintios", "/versiculos/1corintios.jpg", "/dicas/1corintios.png", "/livros/1co.png" ),
  new LivroDaBiblia("2corintios", "/versiculos/2corintios.jpg", "/dicas/2corintios.png", "/livros/2co.png" ),
  new LivroDaBiblia("galatas", "/versiculos/galatas.jpg", "/dicas/galatas.png", "/livros/gl.png" ),
  new LivroDaBiblia("efesios", "/versiculos/efesios.jpg", "/dicas/efesios.png", "/livros/ef.png" ),
  new LivroDaBiblia("filipenses", "/versiculos/filipenses.jpg", "/dicas/colossenses.png", "/livros/cl.png" ),
  new LivroDaBiblia("colossenses", "/versiculos/colossenses.jpg", "/dicas/filipenses.png", "/livros/fl.png" ),
  new LivroDaBiblia("1tessalonicenses", "/versiculos/1tessalonicenses.jpg", "/dicas/1tessalonicenses.png", "/livros/1ts.png" ),
  new LivroDaBiblia("2tessalonicenses", "/versiculos/2tessalonicenses.jpg", "/dicas/2tessalonicenses.png", "/livros/2ts.png" ),
  new LivroDaBiblia("1timoteo", "/versiculos/1timoteo.jpg", "/dicas/1timoteo.png", "/livros/1tm.png" ),
  new LivroDaBiblia("2timoteo", "/versiculos/2timoteo.jpg", "/dicas/2timoteo.png", "/livros/2tm.png" ),
  new LivroDaBiblia("tito", "/versiculos/tito.jpg", "/dicas/tito.png", "/livros/tt.png" ),
  new LivroDaBiblia("filemom", "/versiculos/filemom.jpg", "/dicas/filemom.png", "/livros/fl.png" ),
  new LivroDaBiblia("hebreus", "/versiculos/hebreus.jpg", "/dicas/hebreus.png", "/livros/hb.png" ),
  new LivroDaBiblia("tiago", "/versiculos/tiago.jpg", "/dicas/tiago.png", "/livros/tg.png" ),
  new LivroDaBiblia("1pedro", "/versiculos/1pedro.jpg", "/dicas/1pedro.png", "/livros/1pd.png" ),
  new LivroDaBiblia("2pedro", "/versiculos/2pedro.jpg", "/dicas/2pedro.png", "/livros/2pd.png" ),
  new LivroDaBiblia("1joao", "/versiculos/1joao.jpg", "/dicas/1joao.png", "/livros/1jo.png" ),
  new LivroDaBiblia("2joao", "/versiculos/2joao.jpg", "/dicas/2joao.png", "/livros/2jo.png" ),
  new LivroDaBiblia("3joao", "/versiculos/3joao.jpg", "/dicas/3joao.png", "/livros/3jo.png" ),
  new LivroDaBiblia("judas", "/versiculos/judas.jpg", "/dicas/judas.png", "/livros/jd.png" ),
  new LivroDaBiblia("apocalipse", "/versiculos/apocalipse.jpg", "/dicas/apocalipse.png", "/livros/ap.png" ),
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
// let dragged = null;

// document.addEventListener("dragend", event => {
//   dragged = event.target;
// });
// document.addEventListener("dragover", event => {
//   event.preventDefault();
// });

