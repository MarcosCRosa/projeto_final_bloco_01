import { Produto } from "../model/Produto";
import { Camiseta } from "../model/ProdutoCamiseta";
import { ProdutoRepository } from "../repository/ProdutoRepository";

class CamisetaController implements ProdutoRepository{

    private listaCamisetas: Array<Camiseta> = new Array<Camiseta>();
    private numeroID:number=0;
    adicionar(Produto: Camiseta): void {
        this.listaCamisetas.push(Produto);
        console.log(`Camiseta:${Produto.nome},Adicionada!`);
        
    }
    listar(): void {
        if(this.listaCamisetas.length===0){
            console.log("\n O carrinho esta vazio!");
            return;
        }
        console.log("Lista de Camisetas Adicionadas:");
        for(let Camiseta of this.listaCamisetas){
            Camiseta.visualizar();
        }
    }
    buscarPorId(id: number): void {
        
    }
    atualizar(produto: Camiseta): void {
        throw new Error("Method not implemented.");
    }
    comprar(id: number, quantidade: number): void {
        throw new Error("Method not implemented.");
    }

    public buscarNoArray(id:number): Camiseta|null{
        for(let camiseta of this.listaCamisetas){
            if(camiseta.id === camiseta.id){
                return camiseta;
            }
        }
        return null;
    }
    public gerarId():number{
        return this.numeroID++;
    }
    
}