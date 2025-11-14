import { Camiseta } from "../model/ProdutoCamiseta";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class CamisetaController implements ProdutoRepository {

    private listaCamisetas: Array<Camiseta> = [];
    private numeroID: number = 1;

    adicionar(produto: Camiseta): void {
        this.listaCamisetas.push(produto);
        console.log(`Camiseta ${produto.nome} adicionada!`);
    }

    listar(): void {
        if (this.listaCamisetas.length === 0) {
            console.log("\nNenhuma camiseta cadastrada!");
            return;
        }

        console.log("\n========== LISTA DE CAMISETAS ==========");
        for (let camiseta of this.listaCamisetas) {
            camiseta.visualizar();
        }
    }

    buscarPorId(id: number): void {
        const camiseta = this.buscarNoArray(id);

        if (camiseta) camiseta.visualizar();
        else console.log(`Camiseta ID ${id} não encontrada!`);
    }

    atualizar(produto: Camiseta): void {
        const camiseta = this.buscarNoArray(produto.id);

        if (camiseta) {
            this.listaCamisetas[this.listaCamisetas.indexOf(camiseta)] = produto;
            console.log(`Camiseta ID ${produto.id} atualizada!`);
        } else {
            console.log(`Camiseta ID ${produto.id} não encontrada!`);
        }
    }

    comprar(id: number, quantidade: number): void {
        const camiseta = this.buscarNoArray(id);

        if (!camiseta) throw new Error(`Camiseta ID ${id} não encontrada`);
        if (quantidade <= 0) throw new Error(`Quantidade inválida`);
        if (camiseta.estoque < quantidade)
            throw new Error(`Estoque insuficiente. Estoque atual: ${camiseta.estoque}`);

        camiseta.estoque -= quantidade;

        console.log(`Compra realizada. Estoque atual: ${camiseta.estoque}`);
    }

    public buscarNoArray(id: number): Camiseta | null {
        return this.listaCamisetas.find(c => c.id === id) || null;
    }

    public gerarId(): number {
        return this.numeroID++;
    }
}
