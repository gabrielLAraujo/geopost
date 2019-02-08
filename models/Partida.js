class Partida {
    constructor(timeDaCasa, timeVisitante, regiao, rodada = 0) {
        this._timeDaCasa = timeDaCasa;
        this._timeVisitante = timeVisitante;
        this._regiao = regiao;
        this._rodada = rodada;
    }
    get timeDaCasa() {
        return this._timeDaCasa;
    }
    get timeVisitante() {
        return this._timeVisitante;
    }
    get regiao() {
        return this._regiao;
    }
    get rodada() {
        return this._rodada;
    }
    set rodada(rodada) {
        this._rodada = rodada;
    }
    // criaReturnoDaPartida
}