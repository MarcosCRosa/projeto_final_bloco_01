
import readlinesync = require("readline-sync");
import { Camiseta } from "./model/ProdutoCamiseta";
import { CamisetaController } from "./controller/CamisetaController";
export function main(){
    let opcao,preco,tipo,estoque:number;
    let tamanho,nome,cor:string;
    //let camiseta1:Camiseta = new Camiseta(1,"Purple X",100,1,"M","Roxo",1);
    let camisetas : CamisetaController = new CamisetaController();
    
    camisetas.adicionar(new Camiseta(camisetas.gerarId(),"Purple",100.00,10,"M","Roxo",1))
    while(true){
     console.log("*********************************************");
     console.log("---------------------------------------------");
     console.log("*******||      LOJA DE CAMISETAS   ||*******");
     console.log("---------------------------------------------");
     console.log("1-Adicionar Camiseta");
     console.log("2-Listar Todas as Camisetas");
     console.log("3-Listar Por (ID)");
     console.log("4-Atualizar Camiseta");
     console.log("5-Comprar Camiseta");
     console.log("6-Sair");
     console.log("\nDigite uma opcao de:(1-6)");
     opcao = readlinesync.questionInt("");
     if(opcao==6){
        console.log("\nVolte sempre.....");
        process.exit(0)
     } 
        switch(opcao){
        case 1:
            console.log("\n\nAdicionar Camiseta");
            console.log("Digite o nome da Camiseta");
            nome = readlinesync.question("");
            console.log("Digite o preco da Camiseta:");
            preco = readlinesync.questionFloat("");
            console.log("Digite o Estoque da Camiseta:");
            estoque = readlinesync.questionInt("");
            console.log("Digite o Tamanho da Camiseta:");
            tamanho = readlinesync.question("");
            console.log("Digite a cor da Camiseta:");
            cor = readlinesync.question("");
            console.log("Digite o tipo da Camiseta:")
            console.log("(1) Gola Polo |(2) Gola V");
            tipo = readlinesync.questionInt("");
            
            camisetas.adicionar(new Camiseta
            (camisetas.gerarId(),nome,preco,estoque,tamanho,cor,tipo));
        break;
        case 2:
            console.log("\n\nListar Todas as Camisetas");
            
        break;
        case 3:
             console.log("\n\nListar Por (ID)");
             break;
        case 4:
        console.log("\n\nAtualizar Camiseta");
        break;
        case 5:
        console.log("\n\nComprar Camiseta");
        break;
        
        default:
            console.log("Opcao Invalida!\n");
            
     }
     
     
     
    }
}

main();