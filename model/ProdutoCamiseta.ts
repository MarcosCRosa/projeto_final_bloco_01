import { Produto } from "./Produto";

export class Camiseta extends Produto {

    private _tamanho!: string;
    private _cor!: string;
    private _tipo!: number;

    constructor(id: number, nome: string, preco: number, estoque: number, tamanho: string, cor: string, tipo: number) {
        super(id, nome, preco, estoque);
        this.tamanho = tamanho;
        this.cor = cor;
        this.tipo = tipo;
    }

    public get tamanho(): string { return this._tamanho; }
    public set tamanho(tamanho: string) {
        if (["P", "M", "G", "GG"].includes(tamanho.toUpperCase())) {
            this._tamanho = tamanho.toUpperCase();
        } else {
            throw new Error("Tamanho inválido");
        }
    }

    public get cor(): string { return this._cor; }
    public set cor(cor: string) {
        if (!cor || !isNaN(Number(cor))) throw new Error("Cor inválida");
        this._cor = cor;
    }

    public get tipo(): number { return this._tipo; }
    public set tipo(tipo: number) {
        if (tipo !== 1 && tipo !== 2) throw new Error("Tipo inválido");
        this._tipo = tipo;
    }

    public visualizar(): void {
        const tipoStr = this._tipo === 1 ? "Gola Polo" : "Gola V";

        console.log("\n----------------------------------------------");
        console.log("ID:", this.id);
        console.log("Nome:", this.nome);
        console.log("Tipo:", tipoStr);
        console.log("Tamanho:", this.tamanho);
        console.log("Cor:", this.cor);
        console.log("Preço:", this.preco.toFixed(2));
        console.log("Estoque:", this.estoque);
        console.log("----------------------------------------------\n");
    }
}
