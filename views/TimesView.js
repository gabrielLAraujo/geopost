class TimesView {
    constructor(tabelaDeTimes) {
        this._tabelaDeTimes = tabelaDeTimes;
    }

    _template(model) {
        return `
        <br>
        <table border="2" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Pontuação</th>
                    <tr>
                </thead>
                <tbody>
                    ${model.listaDeTimes.map( n => {
                        return `
                        <tr>
                            <td>${n.nome}</td>
                            <td>${n.pontuacao}</td>
                        </tr>`
                    }).join('')}
                </tbody>
            </table>
        `
    }
    update(model){
        this._tabelaDeTimes.innerHTML = this._template(model);
    }
}