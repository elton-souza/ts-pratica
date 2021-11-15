import Negociacao from "./negociacao.js";

class Negociacoes{
    private negociacoes:Array<Negociacao> = []; // Negociacao[] = []

    adiciona(negocicao:Negociacao){
        this.negociacoes.push(negocicao);
    }
    lista():ReadonlyArray<Negociacao> { // readyonly Negociacao[]
        return this.negociacoes
    }
}
export default Negociacoes;