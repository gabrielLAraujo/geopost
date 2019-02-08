class Times{
    constructor() {
        this._listaDeTimes = [];
    }
    adicionaTime(time){
        this._listaDeTimes.push(time);
    }
    get listaDeTimes(){
        return [].concat(this._listaDeTimes);
    }
    limpaLista (){
        this._listaDeTimes.length = 0;
    }
    defineCampeao(){
        this._ordenaTimes();
        return this._listaDeTimes[0];
    }
    _ordenaTimes(){
        this._listaDeTimes.sort((a, b) => {
            if (a.pontuacao > b.pontuacao) return -1;
            if (a.pontuacao < b.pontuacao) return 1;
            return 0;
        });
    }
}