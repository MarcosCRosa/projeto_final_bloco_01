import { Produto } from "./Produto";

export class Camiseta extends Produto{

    private _tamanho:string;
    private _cor:string;
    private _tipo:number;
    constructor(id:number,nome:string,
    preco:number,estoque:number,
    tamanho:string,cor:string,tipo:number){
        super(id,nome,preco,estoque);
        this._tamanho=tamanho;
        this._cor=cor;
        this._tipo=tipo;
    }
    public get tamanho(){
        return this._tamanho;
    }
    public set tamanho(tamanho:string){
        this._tamanho=tamanho;
    }
    public get cor(){
        return this._cor;
    }
    public set cor(cor:string){
        this._cor=cor;
    }
    public get tipo(){
        return this._tipo;
    }
    public set tipo(tipo:number){
        this._tipo=tipo
    }
    public visualizar(): void {
        let tipoCamisaStrg: string = "";
        switch(this._tipo){
            case 1:
                tipoCamisaStrg = "Gola Polo";
            break;

            case 2:
                tipoCamisaStrg = "Gola V";
            break;

            default:
                tipoCamisaStrg = "Tipo de Camisa incorreto:";
            
            break;

        }
        console.log("\n**********************************************");
        console.log("              Informações da Camiseta           ");
        console.log("\n**********************************************");
        console.log(`ID do Produto:${this.id}`);
        console.log(`Nome:${this.nome}`);
        console.log(`Tipo:${tipoCamisaStrg}`);
        console.log(`Tamanho:${this._tamanho}`);
        console.log(`Cor:${this._cor}`);
        console.log(`Preço:(R$)${this.preco.toFixed(2)}`);
        console.log(`Estoque Disponivel:${(this.estoque)}`);
        
        
        
        
        
        
          
    }
    
}