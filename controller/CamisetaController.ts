
import { log } from "node:console";
import { Camiseta } from "../model/ProdutoCamiseta";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class CamisetaController implements ProdutoRepository{

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
        let buscarCamisaPorId = this.buscarNoArray(id);

        if(buscarCamisaPorId){
            console.log(buscarCamisaPorId.visualizar());
            
        }else{
            console.log(`A camiseta de ID:${id},não foi encontrada!`);
            
        }
        
    }
    atualizar(camisetaAtualizada: Camiseta): void {
        let camiseta = this.buscarNoArray(camisetaAtualizada.id);

        if(camiseta){
            this.listaCamisetas[this.listaCamisetas.indexOf(camiseta)] = camisetaAtualizada;
            console.log(`A camiseta:${camisetaAtualizada.nome},ID:${camisetaAtualizada.id}\nFoi Atualizada!`);
            
        } else {
            console.log(`A Camiseta:${camisetaAtualizada.nome},Não foi encontrada`);
            
        }
    }
    //deletar
    comprar(id: number, quantidade: number): void {
    try{
        let camiseta = this.buscarNoArray(id);

        if(!camiseta){
            throw new Error(`A camiseta com ID${id},Não foi encontrada!`);
        }

        if(quantidade<=0){
            throw new Error(`A quantidade da Compra deve ser maior que 0`);
        }
        if(camiseta.estoque < quantidade){
            throw new Error(`Não possuimos esta quantidade Em estoque.\nEstoque Atual:${camiseta.estoque}`);

        }
        //passou pelos exceptions e decrementou a quantidade no estoque;
        camiseta.estoque -= quantidade; 
        console.log(`Estoque Atual:${camiseta.estoque}`);
    } catch(error:any){
        console.log(error);
        
    }
    }

    public buscarNoArray(id:number): Camiseta|null{
        for(let camiseta of this.listaCamisetas){
            if(camiseta.id === id){
                return camiseta;
            }
        }
        return null;
    }
    public gerarId():number{
        return this.numeroID++;
    }

    public deletar(id:number):void{
        let camiseta = this.buscarNoArray(id);
        if(camiseta){
            this.listaCamisetas.splice(this.listaCamisetas.indexOf(camiseta),1);
         console.log(`Camiseta  ID${id},removida com sucesso`);
         
        }else{
            console.log('ID não encontrado');
        }
    }
    
}