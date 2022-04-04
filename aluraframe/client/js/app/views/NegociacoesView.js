class NegociacoesView {

    constructor (elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${model.negociacoes.map( n => {
                return `

                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume.toFixed(2)}</td>
                    </tr>

                `}).join('')}
        </tbody>
        
        <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0).toFixed(2)}
                </td>
        </tfoot>
    </table>
    `;

    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }

}


//1 - versão reduzida com arrow function 
//${model.negociacoes.reduce((total, n) => { total + n.volume}, 0.0)}

// versão completa
// ${
//     model.negociacoes.reduce(function (total, n) {
//         return total + n.volume;
//     }, 0.0)
// }


// ELEMENTO HTML RENDERIZADO NA CLASSE JS ACIMA
/* <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
        
        <tfoot>
        </tfoot>
    </table> */