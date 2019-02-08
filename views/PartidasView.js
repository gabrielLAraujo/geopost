class PartidasView {

    constructor(combinacaoETabelaDeJogos) {
        this._combinacaoETabelaDeJogos = combinacaoETabelaDeJogos;
    }
    _template(model) {
        return ` 

            <p >
            ${FormataString.formataCombinacaoDeJogosP(model.listaDePartidas)}<br>Returno:<br>${FormataString.formataCombinacaoDeJogosP(model.listaDePartidasReturno)}
            </p>
            <br>
            <table border="2" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Time da Casa</th>
                        <th>Placar</th>
                        <th>Time Visitante</th>
                        <th>Região</th>
                        <th>Rodada</th>
                        <th>Vencedor</th>
                    <tr>
                </thead>
                <tbody>
                    ${model.todasPartidas.map( n => {
                        return `
                        <tr>
                            <td>${n.timeDaCasa.nome}</td>
                            <td>${n.golsTimeDaCasa + "x" + n.golsTimeVisitante}</td>
                            <td>${n.timeVisitante.nome}</td>
                            <td>${n.regiao}</td>
                            <td>${n.rodada}</td>
                            <td>${n.vencedor}</td>
                        </tr>`
                    }).join('')}
                </tbody>
            </table>

        `;
    }
    update(model) {
        this._combinacaoETabelaDeJogos.innerHTML = this._template(model);
    }
}