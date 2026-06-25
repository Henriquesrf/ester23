console.log("\n=== CLASSIFICAÇÃO DE ALUNOS ===");

let alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
let notas = [9, 5, 7, 10, 4];

let destaque = 0;
let estaBom = 0;
let precisaMelhorar = 0;

for (let i = 0; i < alunos.length; i++) {

    let classificacao;

    if (notas[i] >= 8) {
        classificacao = "Destaque";
        destaque++;
    }
    else if (notas[i] >= 6 && notas[i] <= 7) {
        classificacao = "Está bom";
        estaBom++;
    }
    else {
        classificacao = "Precisa melhorar";
        precisaMelhorar++;
    }

    let status = notas[i] >= 6 ? "Aprovado" : "Reprovado";

    console.log(
        "Aluno: " + alunos[i] +
        " | Nota: " + notas[i] +
        " | Classificação: " + classificacao +
        " | Status: " + status
    );
}

console.log("\n=== RESUMO GERAL DA TURMA ===");
console.log("Destaque: " + destaque);
console.log("Está bom: " + estaBom);
console.log("Precisa melhorar: " + precisaMelhorar);