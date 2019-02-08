class Partidas {
    constructor() {
        this._listaDePartidas = [];
        this._listaDePartidasReturno = [];

    }
    _adicionaPartida(partida) {
        this._listaDePartidas.push(partida);
    }
    _adicionaPartidaReturno(partida) {
        this._listaDePartidasReturno.push(partida);
    }
    get listaDePartidas() {
        return [].concat(this._listaDePartidas);
    }
    get listaDePartidasReturno() {
        return [].concat(this._listaDePartidasReturno);
    }
    get todasPartidas() {
        return [].concat(this._listaDePartidas.concat(this._listaDePartidasReturno));
    }
    _defineRodada() {
        this._listaDePartidas.forEach((element, i) => {
            if ((i + 1) % 2 == 0) {
                this._listaDePartidas[i].rodada = 2;
            } else {
                this._listaDePartidas[i].rodada = 1;
            }
        });
    }
    _defineRodadasDuplas() {
        for (let j = 0; j < this.todasPartidas.length; j++) {
            for (let i = 0; i < this.todasPartidas.length; i++) {
                if (i != j) {
                    if (this.todasPartidas[j].rodada == this.todasPartidas[i].rodada &&
                        this.todasPartidas[j].regiao == this.todasPartidas[i].regiao) {

                        this.todasPartidas[i].rodadaDupla = true;
                    }
                }
            }
        }
    }
    _defineResultados() {
        this.todasPartidas.forEach(element => {
            console.log(element);
            element.golsTimeDaCasa = Math.floor(Math.random() * 10);
            element.golsTimeVisitante = Math.floor(Math.random() * 10);
            if (element.golsTimeDaCasa > element.golsTimeVisitante) {
                element.vencedor = element.timeDaCasa.nome;
                element.timeDaCasa.aumentaPontuacao(3);
            } else if (element.golsTimeDaCasa < element.golsTimeVisitante) {
                element.vencedor = element.timeVisitante.nome;
                element.timeVisitante.aumentaPontuacao(3);
            } else {
                element.vencedor = "Empate";
                element.timeDaCasa.aumentaPontuacao(1);
                element.timeVisitante.aumentaPontuacao(1);
            }
        });
    }
    criaPartidas(times) {
        let i = 0;
        while (i < times.listaDeTimes.length) {
            for (let j = 0; j < times.listaDeTimes.length; j++) {
                if (i != j && i < times.listaDeTimes.length) {
                    let partida = new Partida(
                        times.listaDeTimes[i],
                        times.listaDeTimes[j],
                        times.listaDeTimes[i].regiao
                    );
                    this._adicionaPartida(partida);
                    i++;
                }
            }
        }
        this._defineRodada();
        this._ordenaPartidas();
        this._criaPartidasReturno();
        this._defineRodadasDuplas();
        this._defineResultados();
    }
    _criaPartidasReturno() {
        this._listaDePartidas.forEach(element => {
            const partida = new Partida(
                element.timeVisitante,
                element.timeDaCasa,
                element.regiao,
                element.rodada + 2
            );
            this._adicionaPartidaReturno(partida);
        });
    }
    _ordenaPartidas() {
        this._listaDePartidas.sort((a, b) => {
            if (a.rodada > b.rodada) return 1;
            if (a.rodada < b.rodada) return -1;
            return 0;
        });
    }
    limpaTodasPartidas() {
        this._listaDePartidas.length = 0;
        this._listaDePartidasReturno.length = 0;
    }

}