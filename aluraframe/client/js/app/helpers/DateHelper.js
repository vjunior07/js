class DateHelper {

    constructor () {
        throw new Error('DataHelper não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`
    }

    static textoParaData(texto) { //1

        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            let e = 'Data deve estar no formato aaaa-mm-dd';
            return alert(e);
            // throw new Error(e);
        }

        return new Date(...
            texto
            .split('-')
            .map((item, indice) => item - indice % 2)
            );
    }
}

//* definindo os metodos como statico eles ficam disponiveis 
//para serem chamados sem que classe precise ser instanciada














//1 -
// let data = new Date(...
    //     this._inputData.value
    //     .split('-')
    //     .map(function(item, indice) {
    //         return item - indice % 2;
    //     })
    // );

    //reescrevendo o codigo acima com arrow function