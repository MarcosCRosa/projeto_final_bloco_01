
import readlinesync = require("readline-sync");

export function main(){
    let opcao:number;

    while(true){
     console.log("*********************************************");
     console.log("---------------------------------------------");
     console.log("*******||      LOJA DE CAMISETAS   ||*******");
     console.log("---------------------------------------------");
     console.log("1-Adicionar ao Carrinho");
     console.log("2-Listar Todas as Camisetas");
     console.log("3-Atualizar Camiseta");
     console.log("4-Comprar Camiseta");
     console.log("5-Sair");
     console.log("\nDigite uma opcao de:(1-5)");
     opcao = readlinesync.questionInt("");
     if(opcao==5){
        console.log("\nVolte sempre.....");
        process.exit(0)
     } 
        switch(opcao){
        case 1:
            console.log("\n\nAdicionar Camiseta");
        break;
        case 2:
            console.log("\n\nListar Todas as Camisetas");
        break;
        case 3:
        console.log("\n\nAtualizar Camiseta");
        break;
        case 4:
        console.log("\n\nComprar Camiseta");
        break;
        
        default:
            console.log("Opcao Invalida!\n");
            
     }
     
     
     
    }
}

main();