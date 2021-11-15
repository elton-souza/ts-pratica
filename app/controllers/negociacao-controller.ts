import Negociacao from "../models/negociacao.js";

class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void { //void é um tipo que nao retorna nada
       const negociacao = this.criaNegociocao();
       console.log(negociacao);
       this.limparFormulario();
    }

    criaNegociocao(): Negociacao { //está retornando Negociocao
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date,quantidade,valor);
    }

    limparFormulario(): void{
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
export default NegociacaoController;