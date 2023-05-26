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
  new LivroDaBiblia("filipenses", "/versiculos/filipenses.jpg", "/dicas/filipenses.png", "/livros/fl.png" ),
  new LivroDaBiblia("colossenses", "/versiculos/colossenses.jpg", "/dicas/colossenses.png", "/livros/cl.png" ),
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
let livroCorreto = null
const cronometro = new Cronometro()
setInterval(() => {
  cronometro.atualizaCronometro()
}, 1000);
const inputDeResposta = document.getElementById('nome-do-livro')
const TEMPO_PARA_APARECER_ERRADO = 2000
inputDeResposta.value = ""
function sorteiaLivroDaVez() {
  const numeroAleatorio = Math.floor(Math.random() * listaDeLivros.length)
  if (listaDeNumerosAleatoriosJaSorteados.includes(numeroAleatorio)) {
    sorteiaLivroDaVez()
  }
  else {
    livroCorreto = listaDeLivros[numeroAleatorio]
    listaDeLivros[numeroAleatorio].mostraLivro()
    listaDeNumerosAleatoriosJaSorteados.push(numeroAleatorio);
  }
}

inputDeResposta.addEventListener('keyup', event=>{
  const valorDigitado = event.target.value
  listaDeLivros.filter(b=>b.id.startsWith(valorDigitado))
  .map(lb=>lb.id)//transformando a lista de libros em ids
  .forEach(id=>console.log(id))
})
function verificaSeAcertou() {
  const resposta = inputDeResposta.value
  if (livroCorreto.isRespostaCerta(resposta)){
    inputDeResposta.style.color="rgb(1, 21, 86)"
    inputDeResposta.style.fontFamily="Swis721 BlkEx BT"
    livroCorreto.mostraRespostaCorreta()
    // inputDeResposta.disabled = true remover o comentário quando fizer a lógica de colocar o livro no testamento correto
  }
  else{
    inputDeResposta.style.color="#ff0000"
    setTimeout(()=>acoesParaRespostaErrada(), TEMPO_PARA_APARECER_ERRADO)
  }
}
function acoesParaRespostaErrada() {
  inputDeResposta.style.color="#000000"
  inputDeResposta.value = ""
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
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
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              verificaSeAcertou()
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
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
autocomplete(document.getElementById("nome-do-livro"), listaDeLivros.map(b=>b.id));
// let dragged = null;

// document.addEventListener("dragend", event => {
//   dragged = event.target;
// });
// document.addEventListener("dragover", event => {
//   event.preventDefault();
// });

