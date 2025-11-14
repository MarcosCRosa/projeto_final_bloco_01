import { Camiseta } from "../model/ProdutoCamiseta";
import { ProdutoRepository } from "../repository/ProdutoRepository";

class CamisetaController implements ProdutoRepository{
    adicionar(Produto: Camiseta): void {
        throw new Error("Method not implemented.");
    }
    listar(): void {
        throw new Error("Method not implemented.");
    }
    buscarPorId(id: number): void {
        throw new Error("Method not implemented.");
    }
    atualizar(produto: Camiseta): void {
        throw new Error("Method not implemented.");
    }
    comprar(id: number, quantidade: number): void {
        throw new Error("Method not implemented.");
    }
    
}