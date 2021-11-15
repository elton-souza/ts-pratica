class Negociacoes {
    constructor() {
        this.negociacoes = []; // Negociacao[] = []
    }
    adiciona(negocicao) {
        this.negociacoes.push(negocicao);
    }
    lista() {
        return this.negociacoes;
    }
}
export default Negociacoes;
