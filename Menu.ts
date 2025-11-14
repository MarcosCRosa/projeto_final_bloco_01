
import readlinesync = require("readline-sync");
import { Camiseta } from "./model/ProdutoCamiseta";
import { CamisetaController } from "./controller/CamisetaController";
import { read } from "node:fs";
import { log } from "node:console";
export function main(){
    let opcao,preco,tipo,id,quantidade,estoque:number;
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
     console.log("6-Excluir Camiseta");
     console.log("7-Sair");
     console.log("\nDigite uma opcao de:(1-7)");
     opcao = readlinesync.questionInt("");
     if(opcao==7){
        console.log("\nVolte sempre.....");
        process.exit(0)
     } 
        switch(opcao){
        case 1:
            console.log("\n\nAdicionar Camiseta");
            console.log("Digite o nome da Camiseta:");
            nome = readlinesync.question("");
            while(nome.trim()===""){
                console.log("Valor invalido.");
                console.log("Digite o nome da Camiseta:");
                nome = readlinesync.question("");
            }
            console.log("Digite o preco da Camiseta:");
            preco = readlinesync.questionFloat("");
            while(preco<=0 || isNaN(preco)){
                console.log("Digite um valor valido:");
                preco = readlinesync.questionFloat("");   
            }
            console.log("Digite o Estoque da Camiseta:");
            estoque = readlinesync.questionInt("");
            while(estoque<=0){
                console.log("Digite um valor valido:");
                estoque = readlinesync.questionInt("");
            }
            console.log("Digite o Tamanho da Camiseta:");
            tamanho = readlinesync.question("").toUpperCase();
            while(!["P","M","G","GG"].includes(tamanho)){
                console.log("Digite um tamanho valido(P,M,G,GG):");
                tamanho = readlinesync.question("").toUpperCase();
            }
            console.log("Digite a cor da Camiseta:");
            cor = readlinesync.question("");
            
            while(cor===""){
            console.log("Digite uma cor valida:");
            cor=readlinesync.question("");
            }
            console.log("Digite o tipo da Camiseta:")
            console.log("(1) Gola Polo |(2) Gola V");
            tipo = readlinesync.questionInt("");
            while(tipo!=1 && tipo!=2){
               console.log("Digite 1 ou 2 ");
               tipo = readlinesync.questionInt("");
            }
            
            camisetas.adicionar(new Camiseta
            (camisetas.gerarId(),nome,preco,estoque,tamanho,cor,tipo));
            keyPress();
        break;
        case 2:
            console.log("\n\nListar Todas as Camisetas");
            camisetas.listar();
            keyPress();
        break;
        case 3:
             console.log("\n\nListar Por (ID)");
             console.log("Digite um ID:");
             id = readlinesync.questionInt("");
             camisetas.buscarPorId(id);
             keyPress();
             break;
        case 4:
        console.log("\n\nAtualizar Camiseta");
        id = readlinesync.questionInt("Digite o ID da Camisa:");
        let camisetaExiste = camisetas.buscarNoArray(id);
         if(camisetaExiste){
           console.log("Digite um novo nome para a camiseta:");
            nome = readlinesync.question("");
            while(nome.trim()===""){
                console.log("Valor invalido.");
                console.log("Digite o nome da Camiseta:");
                nome = readlinesync.question("");
            }
            console.log("Digite um novo preco para a camiseta:");
            preco = readlinesync.questionFloat("");
            while(preco<=0 || isNaN(preco)){
                console.log("Digite um valor valido:");
                preco = readlinesync.questionFloat("");   
            }
            console.log("Digite um novo estoque para a camiseta:");
            estoque = readlinesync.questionInt("");
            while(estoque<=0){
                console.log("Digite um valor valido:");
                estoque = readlinesync.questionInt("");
            }
            console.log("Digite um novo tamanho para camiseta:");
            tamanho = readlinesync.question("").toUpperCase();
            while(!["P","M","G","GG"].includes(tamanho)){
                console.log("Digite um tamanho valido(P,M,G,GG):");
                tamanho = readlinesync.question("").toUpperCase();
            }
            console.log("Digite Uma nova cor para a camiseta");
            cor = readlinesync.question("");
            while(cor.trim()===""){
            console.log("Digite uma cor valida:");
            cor=readlinesync.question("");
            }
            console.log("Digite o Novo tipo da Camiseta:")
            console.log("(1) Gola Polo |(2) Gola V");
            tipo = readlinesync.questionInt("");
            while(tipo!=1 && tipo!=2){
               console.log("Digite 1 ou 2 ");
               tipo = readlinesync.questionInt("");
            }
          camisetas.atualizar(new Camiseta(id,nome,preco,estoque,tamanho,cor,tipo));
        }else{
            console.log("ID invalido.");
            
        }
            keyPress();
        break;
        case 5:
        console.log("\n\nComprar Camiseta");
        camisetas.listar();
        id = readlinesync.questionInt("Digite o ID da Camiseta:");
        quantidade = readlinesync.questionInt("Digite a quantidade: ");
        try{
            camisetas.comprar(id,quantidade);
        } catch(error:any){
            console.log(`\n${error}`);
        }       
        keyPress();
        break;
        case 6:
        console.log("\n\nDeletar Camiseta");
        camisetas.listar();
        id = readlinesync.questionInt("Digite o ID da Camiseta:")
        camisetas.deletar(id);
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