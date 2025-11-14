import readlinesync = require("readline-sync");
import { Camiseta } from "./model/ProdutoCamiseta";
import { CamisetaController } from "./controller/CamisetaController";

export function main() {

    let opcao: number;
    let camisetas = new CamisetaController();

    camisetas.adicionar(new Camiseta(camisetas.gerarId(), "Purple", 100, 10, "M", "Roxo", 1));

    while (true) {

        console.log("*********************************************");
        console.log("********** LOJA DE CAMISETAS ***************");
        console.log("*********************************************");
        console.log("1 - Adicionar Camiseta");
        console.log("2 - Listar Camisetas");
        console.log("3 - Buscar por ID");
        console.log("4 - Atualizar");
        console.log("5 - Comprar");
        console.log("6 - Sair");
        console.log("\nOpcão (1-6):");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log("Saindo...");
            process.exit(0);
        }

        switch (opcao) {

            case 1:
                adicionarCamiseta(camisetas);
                break;

            case 2:
                camisetas.listar();
                break;

            case 3:
                buscarPorId(camisetas);
                break;

            case 4:
                atualizarCamiseta(camisetas);
                break;

            case 5:
                comprarCamiseta(camisetas);
                break;
        }

        keyPress();
    }
}

function adicionarCamiseta(controller: CamisetaController) {
    let nome = lerNome();
    let preco = lerPreco();
    let estoque = lerEstoque();
    let tamanho = lerTamanho();
    let cor = lerCor();
    let tipo = lerTipo();
    controller.adicionar(new Camiseta(controller.gerarId(), nome, preco, estoque, tamanho, cor, tipo));
}

function buscarPorId(controller: CamisetaController) {
    let id = readlinesync.questionInt("ID: ");
    controller.buscarPorId(id);
}

function atualizarCamiseta(controller: CamisetaController) {
    let id = readlinesync.questionInt("ID da camiseta: ");

    if (!controller.buscarNoArray(id)) {
        console.log("Camiseta não encontrada!");
        return;
    }

    let nome = lerNome();
    let preco = lerPreco();
    let estoque = lerEstoque();
    let tamanho = lerTamanho();
    let cor = lerCor();
    let tipo = lerTipo();

    controller.atualizar(new Camiseta(id, nome, preco, estoque, tamanho, cor, tipo));
}

function comprarCamiseta(controller: CamisetaController) {
    let id = readlinesync.questionInt("ID para compra: ");
    let quantidade = readlinesync.questionInt("Quantidade: ");
    try {
        controller.comprar(id, quantidade);
    } catch (e: any) {
        console.log(e.message);
    }
}

function lerNome() {
    let nome = readlinesync.question("Nome: ").trim();
    while (!isNaN(Number(nome)) || nome.length === 0)
        nome = readlinesync.question("Nome invalido. Digite novamente: ").trim();
    return nome;
}

function lerPreco() {
    let preco = readlinesync.questionFloat("Preco: ");
    while (isNaN(preco) || preco <= 0)
        preco = readlinesync.questionFloat("Preco invalido. Digite novamente: ");
    return preco;
}

function lerEstoque() {
    let estoque = readlinesync.questionInt("Estoque: ");
    while (isNaN(estoque) || estoque < 0)
        estoque = readlinesync.questionInt("Estoque invalido. Digite novamente: ");
    return estoque;
}

function lerTamanho() {
    let tamanho = readlinesync.question("Tamanho (P/M/G/GG): ").toUpperCase().trim();
    while (!["P", "M", "G", "GG"].includes(tamanho))
        tamanho = readlinesync.question("Tamanho invalido. Digite novamente: ").toUpperCase().trim();
    return tamanho;
}

function lerCor() {
    let cor = readlinesync.question("Cor: ").trim();
    while (!cor || !isNaN(Number(cor)))
        cor = readlinesync.question("Cor invalida. Digite novamente: ").trim();
    return cor;
}

function lerTipo() {
    let tipo = readlinesync.questionInt("Tipo (1-Polo / 2-V): ");
    while (![1, 2].includes(tipo))
        tipo = readlinesync.questionInt("Escolha 1 ou 2: ");
    return tipo;
}

function keyPress() {
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

main();
