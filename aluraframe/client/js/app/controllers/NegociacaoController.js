class NegociacaoController
{
    constructor() {

        //1
        let $ = document.querySelector.bind(document);

        //2           
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem;
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso!'
        this._mensagemView.update(this._mensagem)
        
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }


}

//1 - macete para escrever menos codigo, "emulando" um comportamento de jquery

//2 - inicializar as referencias para os elementos no constructor 
//evita varrer o DOM a todo momento que os elementos precisam ser usado  