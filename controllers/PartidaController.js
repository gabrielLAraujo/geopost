class PartidaController {
  constructor() {
    this._timesERegioes = document.querySelector("#text_timesRegioes");
    this._combinacaoETabelaDeJogos = document.querySelector("#combinacaoETabelaDeJogos");
    this._tabelaCampeoanto = document.querySelector("#tabelaCampeoanto");
    this._times = new Times();
    this._partidas = new Partidas();
    this._partidasView = new PartidasView(this._combinacaoETabelaDeJogos);
    this._timesView = new TimesView(this._tabelaCampeoanto);
  }
  criaCampeonato(event) {
    event.preventDefault();
    let listaDeTimesERegioes = this._timesERegioes.value.split("\n");
    this._criaTimes(listaDeTimesERegioes);
    this._partidas.criaPartidas(this._times);
    console.log(this._times.defineCampeao());


    console.log(this._partidas.listaDePartidas);
    console.log(this._partidas.listaDePartidasReturno);
    console.log(this._partidas.todasPartidas);
    console.log(this._times);
    
    console.log(`${FormataString.formataCombinacaoDeJogosAlertConsole(this._partidas.listaDePartidas)}\nReturno: \n${FormataString.formataCombinacaoDeJogosAlertConsole(this._partidas._listaDePartidasReturno)}`);
    alert(`${FormataString.formataCombinacaoDeJogosAlertConsole(this._partidas.listaDePartidas)}\nReturno: \n${FormataString.formataCombinacaoDeJogosAlertConsole(this._partidas._listaDePartidasReturno)}`);
    
    this._partidasView.update(this._partidas);
    this._timesView.update(this._times);
  //   this._times.limpaLista();
  //   this._limpaFormulario();
  //   this._partidas.limpaTodasPartidas();
  }

  _criaTimes(listaDeTimesERegioes) {
    listaDeTimesERegioes.forEach(element => {
      if (element != "") {
        const time = new Time(element);
        this._times.adicionaTime(time);
      }
    });
  }
  _limpaFormulario() {
    this._timesERegioes.value = "";
  }
}