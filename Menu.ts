
import readlinesync = require("readline-sync");
import { Camiseta } from "./model/ProdutoCamiseta";
import { CamisetaController } from "./controller/CamisetaController";
export function main(){
    let opcao,preco,tipo,estoque,id,quantidade:number;
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
            keyPress();
        break;
        case 2:
            camisetas.listar();
            keyPress();
            
        break;
        case 3:
             console.log("\n\nListar Por (ID)");
             console.log("Digite o ID da Camiseta:");
             id = readlinesync.questionInt("");
             camisetas.buscarPorId(id);
             keyPress();
             break;
        case 4:
        console.log("\n\nAtualizar Camiseta");
        console.log("Digite o ID da Camiseta que deseja Atuaizar:");
        id = readlinesync.questionInt("");
        if(camisetas.buscarNoArray(id)){
        nome = readlinesync.question("Digite o novo nome da Camiseta:");
        preco = readlinesync.questionFloat("Digite o novo preco da Camiseta:");
        estoque = readlinesync.questionInt("Digite o numero de Camisetas no estoque:");
        tamanho = readlinesync.question("Digite o tamanho da Camiseta(P/M/G/GG)");
        cor = readlinesync.question("Digite a cor da Camiseta:");
        tipo = readlinesync.questionInt("(1) Gola Polo | (2) Gola V:");
        
        const camisetaAtualizada = new Camiseta(id,nome,preco,estoque,tamanho,cor,tipo);
        camisetas.atualizar(camisetaAtualizada);
        }else{
            console.log(`Camiseta ID${id},não encontrada!`);
            
        }
        keyPress();
        break;
        case 5:
        console.log("\n\nComprar Camisetas");
        
        console.log("---------Camisetas Disponiveis Para Compra--------");
        camisetas.listar();
        console.log("---------------------------------------------------");
        console.log("Digite o ID da Camiseta que deseja Comprar:");
        id = readlinesync.questionInt("");
        
        let CamisetaComprada = camisetas.buscarNoArray(id);
        if (CamisetaComprada){
            console.log("\n------Camiseta Selecionada------");
            CamisetaComprada.visualizar();
            console.log("----------------------------------");
            console.log("Digite a Quantidade que deseja Comprar");
            quantidade = readlinesync.questionInt("");
            try{
            camisetas.comprar(id,quantidade);
            } catch(eror:any){
                console.log("Tente Novamente");
                
            }
            
            console.log("---------------------------------------");
        } else{
            console.log(`Camiseta com ID:${id},não foi encontrada!`);

        }
            keyPress();
        break;
        
        default:
            console.log("Opcao Invalida!\n");
            keyPress();
            break;
     }
     
     
     
    }
}

main();
function keyPress():void{
    console.log("\nPressione enter para continuar....");
    readlinesync.prompt();    
}