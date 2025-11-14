
import readlinesync = require("readline-sync");
import { Camiseta } from "./model/ProdutoCamiseta";
import { Produto } from "./model/Produto";

export function main(){
    let opcao:number;
    let camiseta1:Camiseta = new Camiseta(1,"Purple X",100,1,"M","Roxo",1);
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
        break;
        case 2:
            console.log("\n\nListar Todas as Camisetas");
            camiseta1.visualizar();
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