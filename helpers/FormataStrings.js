class FormataString {

    static formataCombinacaoDeJogosAlertConsole(partidas) {
        let str = ""
        partidas.forEach(element => {
            if (element.rodadaDupla == true) {
                str += ` ${element.timeDaCasa.nome} vs ${element.timeVisitante.nome} - ${element.regiao} - Rodada ${element.rodada} (RODADA DUPLA)\n`;
            } else {
                str += ` ${element.timeDaCasa.nome} vs ${element.timeVisitante.nome} - ${element.regiao} - Rodada ${element.rodada}\n`;

            }
        });
        return str;
    }
    static formataCombinacaoDeJogosP(partidas) {
        let str = ""
        partidas.forEach(element => {
            if (element.rodadaDupla == true) {
                str += ` ${element.timeDaCasa.nome} vs ${element.timeVisitante.nome} - ${element.regiao} - Rodada ${element.rodada} (RODADA DUPLA)<br>`;
            } else {
                str += ` ${element.timeDaCasa.nome} vs ${element.timeVisitante.nome} - ${element.regiao} - Rodada ${element.rodada}<br>`;

            }
        });
        return str;
    }
}