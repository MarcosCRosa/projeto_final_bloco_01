export abstract class Produto {

    private _id:number;
    private _nome:string;
    private _preco:number;
    private _estoque:boolean;
    constructor(id:number,nome:string,preco:number,estoque:boolean) {
        this._id = id;
        this._nome=nome;
        this._preco=preco;
        this._estoque=estoque;
    }
    public get id(){
        return this._id;
    }
    public set id(id:number){
        this._id=id;
    }
    public get nome(){
        return this._nome
    }
    public set nome(nome:string){
        this._nome=nome;
    }
    public get preco(){
        return this._preco;
    }
    public set preco(preco:number){
        this._preco=preco;
    }
    public get estoque(){
        return this._estoque;
    }

    public set estoque(estoque:boolean){
        this._estoque =estoque;
    }

    // metodo visualizar que vai ser implementado
    // em todas as classes so ainda nao sei se vou.
    public abstract visualizar():void;
}