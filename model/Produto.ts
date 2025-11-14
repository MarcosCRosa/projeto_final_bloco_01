export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _preco: number;
    private _estoque: number;

    constructor(id: number, nome: string, preco: number, estoque: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
    }

    public get id(): number { return this._id; }
    public set id(id: number) { this._id = id; }

    public get nome(): string { return this._nome; }
    public set nome(nome: string) { this._nome = nome; }

    public get preco(): number { return this._preco; }
    public set preco(preco: number) { this._preco = preco; }

    public get estoque(): number { return this._estoque; }
    public set estoque(estoque: number) { this._estoque = estoque; }

    public abstract visualizar(): void;
}
