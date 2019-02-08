class Time{

    constructor(timeERegiao){
        this._nome = timeERegiao.split(";")[0];
        this._regiao = timeERegiao.split(";")[1];

        
        this._pontuacao = 0;
       

        
    }
    aumentaPontuacao(valor){
        this.pontuacao += valor;
    }
    get nome(){
        return this._nome;
    }
    set pontuacao(valor){
        this._pontuacao = valor;
    }
    get regiao(){
        return this._regiao;
    }
    get pontuacao(){
        return this._pontuacao;
    }
}