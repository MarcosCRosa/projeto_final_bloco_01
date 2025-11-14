import { Produto } from "./Produto";

export class Camiseta extends Produto{

    private _tamanho:string;
    private _cor:string;
    private _tipo:number;
    constructor(id:number,nome:string,
    preco:number,estoque:boolean,
    tamanho:string,cor:string,tipo:number){
        super(id,nome,preco,estoque);
        this._tamanho=tamanho;
        this._cor=cor;
        this._tipo=tipo;
    }
    public visualizar(): void {
        throw new Error("Method not implemented.");
    }
    
}