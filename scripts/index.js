const listaDeLivros = [
  new LivroDaBiblia("at", "genesis", "/versiculos/genesis.jpg", "/dicas/genesis.png", "/livros/gn.png"),
  new LivroDaBiblia("at", "exodo", "/versiculos/exodo.jpg", "/dicas/exodo.png", "/livros/ex.png"),
  new LivroDaBiblia("at", "levitico", "/versiculos/levitico.jpg", "/dicas/levitico.png", "/livros/lv.png"),
  new LivroDaBiblia("at", "numeros", "/versiculos/numeros.jpg", "/dicas/numeros.png", "/livros/nm.png"),
  new LivroDaBiblia("at", "deuteronomio", "/versiculos/deuteronomio.jpg", "/dicas/deuteronomio.png", "/livros/dt.png"),
  // new LivroDaBiblia("at", "josue", "/versiculos/josue.jpg", "/dicas/josue.png", "/livros/js.png"),
  // new LivroDaBiblia("at", "juizes", "/versiculos/juizes.jpg", "/dicas/juizes.png", "/livros/jz.png"),
  // new LivroDaBiblia("at", "rute", "/versiculos/rute.jpg", "/dicas/rute.png", "/livros/rt.png"),
  // new LivroDaBiblia("at", "1samuel", "/versiculos/1samuel.jpg", "/dicas/1samuel.png", "/livros/1sm.png"),
  // new LivroDaBiblia("at", "2samuel", "/versiculos/2samuel.jpg", "/dicas/2samuel.png", "/livros/2sm.png"),
  // new LivroDaBiblia("at", "1reis", "/versiculos/1reis.jpg", "/dicas/1reis.png", "/livros/1rs.png"),
  // new LivroDaBiblia("at", "2reis", "/versiculos/2reis.jpg", "/dicas/2reis.png", "/livros/2rs.png"),
  // new LivroDaBiblia("at", "1cronicas", "/versiculos/1cronicas.jpg", "/dicas/1cronicas.png", "/livros/1cr.png"),
  // new LivroDaBiblia("at", "2cronicas", "/versiculos/2cronicas.jpg", "/dicas/2cronicas.png", "/livros/2cr.png"),
  // new LivroDaBiblia("at", "esdras", "/versiculos/esdras.jpg", "/dicas/esdras.png", "/livros/ed.png"),
  // new LivroDaBiblia("at", "neemias", "/versiculos/neemias.jpg", "/dicas/neemias.png", "/livros/ne.png"),
  // new LivroDaBiblia("at", "tobias", "/versiculos/tobias.jpg", "/dicas/tobias.png", "/livros/tobias.png"),
  // new LivroDaBiblia("at", "judite", "/versiculos/judite.jpg", "/dicas/judite.png", "/livros/judite.png"),
  // new LivroDaBiblia("at", "ester", "/versiculos/ester.jpg", "/dicas/ester.png", "/livros/et.png"),
  // new LivroDaBiblia("at", "jo", "/versiculos/jo.jpg", "/dicas/jo.png", "/livros/jo.png"),
  // new LivroDaBiblia("at", "salmos", "/versiculos/salmos.jpg", "/dicas/salmos.png", "/livros/sl.png"),
  // new LivroDaBiblia("at", "1macabeus", "/versiculos/1macabeus.jpg", "/dicas/1macabeus.png", "/livros/1macabeus.png"),
  // new LivroDaBiblia("at", "2macabeus", "/versiculos/2macabeus.jpg", "/dicas/2macabeus.png", "/livros/2macabeus.png"),
  // new LivroDaBiblia("at", "proverbios", "/versiculos/proverbios.jpg", "/dicas/proverbios.png", "/livros/pv.png"),
  // new LivroDaBiblia("at", "eclesiastes", "/versiculos/eclesiastes.jpg", "/dicas/eclesiastes.png", "/livros/ec.png"),
  // new LivroDaBiblia("at", "cantares", "/versiculos/cantares.jpg", "/dicas/cantares.png", "/livros/ct.png"),
  // new LivroDaBiblia("at", "sabedoria", "/versiculos/sabedoria.jpg", "/dicas/sabedoria.png", "/livros/sabedoria.png"),
  // new LivroDaBiblia("at", "eclesiastico", "/versiculos/eclesiastico.jpg", "/dicas/eclesiastico.png", "/livros/eclesiastico.png"),
  // new LivroDaBiblia("at", "isaias", "/versiculos/isaias.jpg", "/dicas/isaias.png", "/livros/is.png"),
  // new LivroDaBiblia("at", "jeremias", "/versiculos/jeremias.jpg", "/dicas/jeremias.png", "/livros/jr.png"),
  // new LivroDaBiblia("at", "lamentacoes", "/versiculos/lamentacoes.jpg", "/dicas/lamentacoes.png", "/livros/lm.png"),
  // new LivroDaBiblia("at", "baruque", "/versiculos/baruque.jpg", "/dicas/baruque.png", "/livros/baruque.png"),
  // new LivroDaBiblia("at", "ezequiel", "/versiculos/ezequiel.jpg", "/dicas/ezequiel.png", "/livros/ez.png"),
  // new LivroDaBiblia("at", "daniel", "/versiculos/daniel.jpg", "/dicas/daniel.png", "/livros/dn.png"),
  // new LivroDaBiblia("at", "oseias", "/versiculos/oseias.jpg", "/dicas/oseias.png", "/livros/os.png"),
  // new LivroDaBiblia("at", "joel", "/versiculos/joel.jpg", "/dicas/joel.png", "/livros/jl.png"),
  // new LivroDaBiblia("at", "amos", "/versiculos/amos.jpg", "/dicas/amos.png", "/livros/am.png"),
  // new LivroDaBiblia("at", "obadias", "/versiculos/obadias.jpg", "/dicas/obadias.png", "/livros/ob.png"),
  // new LivroDaBiblia("at", "jonas", "/versiculos/jonas.jpg", "/dicas/jonas.png", "/livros/jn.png"),
  // new LivroDaBiblia("at", "miqueias", "/versiculos/miqueias.jpg", "/dicas/miqueias.png", "/livros/mq.png"),
  // new LivroDaBiblia("at", "naum", "/versiculos/naum.jpg", "/dicas/naum.png", "/livros/na.png"),
  // new LivroDaBiblia("at", "habacuque", "/versiculos/habacuque.jpg", "/dicas/habacuque.png", "/livros/hc.png"),
  // new LivroDaBiblia("at", "sofonias", "/versiculos/sofonias.jpg", "/dicas/sofonias.png", "/livros/sf.png"),
  // new LivroDaBiblia("at", "ageu", "/versiculos/ageu.jpg", "/dicas/ageu.png", "/livros/ag.png"),
  // new LivroDaBiblia("at", "zacarias", "/versiculos/zacarias.jpg", "/dicas/zacarias.png", "/livros/zc.png"),
  // new LivroDaBiblia("at", "malaquias", "/versiculos/malaquias.jpg", "/dicas/malaquias.png", "/livros/ml.png"),
  // new LivroDaBiblia("nt", "mateus", "/versiculos/mateus.jpg", "/dicas/mateus.png", "/livros/mt.png"),
  // new LivroDaBiblia("nt", "marcos", "/versiculos/marcos.jpg", "/dicas/marcos.png", "/livros/mc.png"),
  // new LivroDaBiblia("nt", "lucas", "/versiculos/lucas.jpg", "/dicas/lucas.png", "/livros/lc.png"),
  // new LivroDaBiblia("nt", "joao", "/versiculos/joao.jpg", "/dicas/joao.png", "/livros/joao.png"),
  // new LivroDaBiblia("nt", "atos", "/versiculos/atos.jpg", "/dicas/atos.png", "/livros/at.png"),
  // new LivroDaBiblia("nt", "romanos", "/versiculos/romanos.jpg", "/dicas/romanos.png", "/livros/rm.png"),
  // new LivroDaBiblia("nt", "1corintios", "/versiculos/1corintios.jpg", "/dicas/1corintios.png", "/livros/1co.png"),
  // new LivroDaBiblia("nt", "2corintios", "/versiculos/2corintios.jpg", "/dicas/2corintios.png", "/livros/2co.png"),
  // new LivroDaBiblia("nt", "galatas", "/versiculos/galatas.jpg", "/dicas/galatas.png", "/livros/gl.png"),
  // new LivroDaBiblia("nt", "efesios", "/versiculos/efesios.jpg", "/dicas/efesios.png", "/livros/ef.png"),
  // new LivroDaBiblia("nt", "filipenses", "/versiculos/filipenses.jpg", "/dicas/filipenses.png", "/livros/fl.png"),
  // new LivroDaBiblia("nt", "colossenses", "/versiculos/colossenses.jpg", "/dicas/colossenses.png", "/livros/cl.png"),
  new LivroDaBiblia("nt", "1tessalonicenses", "/versiculos/1tessalonicenses.jpg", "/dicas/1tessalonicenses.png", "/livros/1ts.png"),
  new LivroDaBiblia("nt", "2tessalonicenses", "/versiculos/2tessalonicenses.jpg", "/dicas/2tessalonicenses.png", "/livros/2ts.png"),
  // new LivroDaBiblia("nt", "1timoteo", "/versiculos/1timoteo.jpg", "/dicas/1timoteo.png", "/livros/1tm.png"),
  // new LivroDaBiblia("nt", "2timoteo", "/versiculos/2timoteo.jpg", "/dicas/2timoteo.png", "/livros/2tm.png"),
  // new LivroDaBiblia("nt", "tito", "/versiculos/tito.jpg", "/dicas/tito.png", "/livros/tt.png"),
  // new LivroDaBiblia("nt", "filemom", "/versiculos/filemom.jpg", "/dicas/filemom.png", "/livros/fm.png"),
  // new LivroDaBiblia("nt", "hebreus", "/versiculos/hebreus.jpg", "/dicas/hebreus.png", "/livros/hb.png"),
  // new LivroDaBiblia("nt", "tiago", "/versiculos/tiago.jpg", "/dicas/tiago.png", "/livros/tg.png"),
  // new LivroDaBiblia("nt", "1pedro", "/versiculos/1pedro.jpg", "/dicas/1pedro.png", "/livros/1pd.png"),
  // new LivroDaBiblia("nt", "2pedro", "/versiculos/2pedro.jpg", "/dicas/2pedro.png", "/livros/2pd.png"),
  // new LivroDaBiblia("nt", "1joao", "/versiculos/1joao.jpg", "/dicas/1joao.png", "/livros/1jo.png"),
  // new LivroDaBiblia("nt", "2joao", "/versiculos/2joao.jpg", "/dicas/2joao.png", "/livros/2jo.png"),
  // new LivroDaBiblia("nt", "3joao", "/versiculos/3joao.jpg", "/dicas/3joao.png", "/livros/3jo.png"),
  // new LivroDaBiblia("nt", "judas", "/versiculos/judas.jpg", "/dicas/judas.png", "/livros/jd.png"),
  // new LivroDaBiblia("nt", "apocalipse", "/versiculos/apocalipse.jpg", "/dicas/apocalipse.png", "/livros/ap.png"),
]
const pontuacao = new Pontuacao("indicador")
const listaDeNumerosAleatoriosJaSorteados = []
const listaDeLivrosJaAcertados = []
let ultimoNumeroSorteado = 999
let dragged = null
const gerenciadorDeErros = new GerenciadorDeErros()
// X-X-X-X-X-X-X-X-X-X-X- PÁGINA 1-X-X-X-X-X-X-X-X-X-X-X
function clicarVT() {
  document.getElementById("pagina1").style.display = "none"
  document.getElementById("velho-testamento").style.display = "grid"
}
function clicarNT() {
  document.getElementById("pagina1").style.display = "none"
  document.getElementById("novo-testamento").style.display = "grid"
}
function clicarAP() {
  document.getElementById("pagina1").style.display = "none"
  document.getElementById("apocrifos").style.display = "grid"
}
function clicarRetornar() {
  document.getElementById("velho-testamento").style.display = "none"
  document.getElementById("novo-testamento").style.display = "none"
  document.getElementById("apocrifos").style.display = "none"
  document.getElementById("pagina1").style.display = "block"
}
function clicarStart() {
  document.getElementById("pagina1").style.display = "none"
  document.getElementById("pagina2").style.display = "grid"
  cronometro.iniciaCronometro()
  // sorteiaCardDaVez()
  // botaoDispenserCards.bloqueiaBotao()
}

// X-X-X-X-X-X-X-X-X-X-X- PÁGINA 2 -X-X-X-X-X-X-X-X-X-X-X
const livro = document.getElementById("livro")
livro.addEventListener("click", () => {
  sorteiaLivroDaVez()
})

document.getElementById("botao-despenser-dicas")
  .addEventListener("click", () => {
    document.getElementById("dica").style.display = "block"
    pontuacao.usandoDica()
  })
let livroCorreto = null
const cronometro = new Cronometro()
setInterval(() => {
  cronometro.atualizaCronometro()
}, 1000);
const inputDeResposta = document.getElementById('nome-do-livro')
const TEMPO_PARA_APARECER_ERRADO = 2000
inputDeResposta.value = ""
function sorteiaLivroDaVez() {
  // const numeroAleatorio=59
  const numeroAleatorio = Math.floor(Math.random() * listaDeLivros.length)
  if (listaDeNumerosAleatoriosJaSorteados.includes(numeroAleatorio)
  && numeroAleatorio != ultimoNumeroSorteado) {
    sorteiaLivroDaVez()
  }
  else {
    livroCorreto = listaDeLivros[numeroAleatorio]
    listaDeLivros[numeroAleatorio].mostraLivro()
    pontuacao.passandoParaNovoLivro()
    ultimoNumeroSorteado = numeroAleatorio
    // listaDeNumerosAleatoriosJaSorteados.push(numeroAleatorio);
  }
}

inputDeResposta.addEventListener('keyup', event => {
  const valorDigitado = event.target.value
  listaDeLivros.filter(b => b.id.startsWith(valorDigitado))
    .map(lb => lb.id)//transformando a lista de livros em ids
    .forEach(id => console.log(id))
})
function verificaSeAcertou() {
  const resposta = inputDeResposta.value
  if (livroCorreto.isRespostaCerta(resposta)) {
    inputDeResposta.style.color = "rgb(1, 21, 86)"
    inputDeResposta.style.fontFamily = "Swis721 BlkEx BT"
    if (resposta == "deuteronomio") {
      inputDeResposta.style.fontSize = "18px"
    } else if (resposta.length > 12) {
      inputDeResposta.style.fontSize = "15px"
    } else {
      inputDeResposta.style.fontSize = "22px"
    }
    livroCorreto.mostraRespostaCorreta()
    // inputDeResposta.disabled = true (remover o comentário quando fizer a lógica de colocar o livro no testamento correto)
    pontuacao.adicionaPontuacaoCorreta()
    listaDeLivrosJaAcertados.push(livroCorreto.id)
    listaDeNumerosAleatoriosJaSorteados.push(ultimoNumeroSorteado);
    console.table(listaDeLivrosJaAcertados)
  }
  else {
    inputDeResposta.style.color = "#ff0000"
    setTimeout(() => acoesParaRespostaErrada(), TEMPO_PARA_APARECER_ERRADO)
  }
}
function acoesParaRespostaErrada() {
  inputDeResposta.style.color = "#000000"
  inputDeResposta.style.fontSize = "18px"
  const primeiraLetra = livroCorreto.pegaPrimeiraLetra()
  inputDeResposta.value = ""
  gerenciadorDeErros.adicionaErro()
  if (gerenciadorDeErros.isPassarAVez()){
    alert("PASSANDO A VEZ")
    gerenciadorDeErros.zerarQuantidadeDeErros()
  }
  pontuacao.errando()
  if (isNaN(primeiraLetra)) {
    document.getElementById("dica-bonus").innerHTML =
      `<p class="dica-extra">"<strong>${primeiraLetra}</strong>"</p>
    <img id="imagem-de-fundo" src="imagens/mensagem-nova-dica-letra.png">`
  }
  else {
    document.getElementById("dica-bonus").innerHTML =
      `<p class="dica-extra">"<strong>${primeiraLetra}</strong>"</p>
    <img id="imagem-de-fundo" src="imagens/mensagem-nova-dica-numero.png">`
  }
  document.getElementById("dica-bonus").style.zIndex = "9999"
  setTimeout(() => escondeModal(), 5000)
}
function escondeModal() {
  document.getElementById("dica-bonus").innerHTML = ""
  document.getElementById("dica-bonus").style.zIndex = "-20"
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    document.getElementById('nome-autocomplete').appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      let propriedadesDosEstilos = {
        clicavel: true,
        classeParaAdicionar:"habilitado"
      }
      if (listaDeLivrosJaAcertados.includes(arr[i])) {
        propriedadesDosEstilos.clicavel = false
        propriedadesDosEstilos.classeParaAdicionar = "desabilitado"
      }
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        
        b.classList.add(propriedadesDosEstilos.classeParaAdicionar)
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        if (propriedadesDosEstilos.clicavel) {
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            verificaSeAcertou()
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
        }
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.getElementById("nome-do-livro"), listaDeLivros.map(b => b.id));
// let dragged = null;

document.addEventListener("dragstart", event => {
  dragged = event.target;
  document.getElementById("at").classList.add("caixa-dropped-escolha")
  document.getElementById("nt").classList.add("caixa-dropped-escolha")
});
document.addEventListener("dragend", event => {
  dragged = event.target;
  document.getElementById("at").classList.remove("caixa-dropped-escolha")
  document.getElementById("nt").classList.remove("caixa-dropped-escolha")
  document.getElementById("at").classList.remove("caixa-dropped-hover")
  document.getElementById("nt").classList.remove("caixa-dropped-hover")
});
document.addEventListener("dragleave", event => {
  document.getElementById("at").classList.remove("caixa-dropped-hover")
  document.getElementById("nt").classList.remove("caixa-dropped-hover")
});
document.addEventListener("dragover", event => {
  if (event.target.id == "at" || event.target.id == "nt") {
    document.getElementById(event.target.id).classList.add("caixa-dropped-hover")
  }
  event.preventDefault();
});
document.addEventListener("drop", event => {
  // impedir a ação padrão (default) e assim permitir dropagem para elementos dragaveis)
  event.preventDefault();
  if (livroCorreto.isDoTestamento(event.target.id)) {
    realizaAcoesDeAcerto()
  } else {
    realizaAcoesDeErro()
  }
});
function realizaAcoesDeErro() {
  pontuacao.errandoTestamento()
  document.getElementById("modal-erro").checked = true
  setTimeout(() => {
    document.getElementById("modal-erro").checked = false
  }, 1200)
}

function realizaAcoesDeAcerto() {
  pontuacao.adicionaPontuacaoCorretaTestamento()
  livroCorreto.fechaABiblia()
  dragged.style.display = "none"
  inputDeResposta.value = ""
  verificaFimDeJogo()
  // document.getElementById("mensagem-de-acerto").style.display = "block"
  document.getElementById("modal-acerto").checked = true
  setTimeout(() => {
    document.getElementById("modal-acerto").checked = false
  }, 1200)
}
function verificaFimDeJogo() {
  if(isFimDeJogo()) {
    realizaAcoesDeFimDeJogo()
  }
}
function isFimDeJogo() {
  return listaDeLivros.length == listaDeNumerosAleatoriosJaSorteados.length
}
function realizaAcoesDeFimDeJogo() {
  cronometro.pararCronometro()
  pontuacao.adicionaPontuacaoDeAcordoComCronometro(cronometro)
  alert('fim de jogo')
}