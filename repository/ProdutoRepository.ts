import { Camiseta } from "../model/ProdutoCamiseta";

export interface ProdutoRepository{
    adicionar(Produto:Camiseta):void;

    listar():void;

    buscarPorId(id:number):void;

    atualizar(produto:Camiseta):void;

    comprar(id:number,quantidade:number):void;
}