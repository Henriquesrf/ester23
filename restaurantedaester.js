let clientes = [
{ nome: "Ana", idade: 18, ID: "ID 1" },
{ nome: "Juan", idade: 28, ID: "ID 2" }
];

console.log(" -- Cliente: -- ");

for (let pessoa of clientes) 

    if (pessoa.nome === "Ana" && pessoa.ID === "ID 1")

console.log(pessoa.nome + " - " + pessoa.ID + " - Pedido 1");
console.log(" ");
 


//henrique se fresqueando em cima denovo


let lanche = 1
    
switch (lanche) {
     case 1:
         console.log("- Você escolheu o lanche 1: Pizza"); 
        break;
    case 2:
        console.log("- Você escolheu o lanche 2: Hambúrguaer");        
        break;
    case 3:
        console.log("- Você escolheu o lanche 3: Salada");        
        break;

        default:
        console.log("Opção inválida. Por favor, escolha um lanche válido.");        
        break;
}

//henrique se fresqueando:


let bebiba = 4;

switch (bebiba) {
     case 1:
        console.log("- Você escolheu: uma garrafa de Água"); 
        break;
    
    case 2:
        console.log("- Você escolheu: uma garrafa de Refrigerante");        
        break;
    
        case 3:
        console.log("- Você escolheu: um copo de Suco");        
        break;

    case 4:
        console.log("- Você escolheu: uma xícara de Café");        
        break;

    case 5:
        console.log("- Você escolheu: uma xícara de Chá");        
        break;

        default:
        console.log("Opção inválida. Por favor, escolha uma bebida válida.");        
        break;
}

if (bebiba === 4 && lanche === 1) {
    console.log(" ");
    console.log("------------------ Restaurante da Esterzinha :) ----------------------");
    console.log(" ");
    console.log("- Pedido Final: 1 xícara de Café e 1 Pizza");
    console.log(" ");
}