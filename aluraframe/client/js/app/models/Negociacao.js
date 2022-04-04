class Negociacao 
{

    constructor (data, quantidade, valor) {
        this._data = new Date(data.getTime());  //1
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); //2
    }

    get data() { //3
        return new Date(this._data.getTime()); //4
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}

/**
 * 1
 * Exemplo de programação defensiva: em vez de criar uma data com o objeto Date passado na inicialização,
 * crio um novo objeto com a data informada e salvo a referencia para este. 
 * Desta forma, este valor não pode ser alterado fora da classe 
 * 
 * 2
 * garante que a instancia/objeto criada para esta classe não poderá ser alterada após instancia 
 * este metodo garante somente o freeze das propriedades no nivel da propria classe
 * referencias para outros objetos dentro da classe ainda poderão ser alterados
 * como solução pode ser aplicado tecnicas de programação defensiva
 * 
 * 3
 * o metodo de acesso definido assim, permite o acesso aos dados da instancia pelo nome da propriedade
 *  ou seja, em vez de chamar n1.getData(); posso chamar n1.data; permitindo somente a leitura e não a alteração
 * 
 * 4
 * Programação defensiva: para evitar que esta propriedade seja alterada fora da classe
 * quando chamada passo a referencia para um novo objeto criado com a data salva na instancia
 * dessa forma se alguem "maliciosamente", tentar alterar este valor fora da classe,
 * estará alterando o valor na nova referencia e não diretamente no valor salvo
 * 
 */