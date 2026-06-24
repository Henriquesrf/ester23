let  nomes = ["João","Thiago","Pedro","Judas","Jesus"]

let nota1 = [6, 5, 7, 9, 10]
let nota2 = [10, 6, 8, 10, 10, 10]

console.log("Turma da Professora Ester Feiosa")
console.log(" :( ")
console.log(" ")

for (let cont = 0; cont <= (nomes.length - 1); cont++) {
    let media = (nota1[cont] + nota2[cont])  / 2
    console.log(" Media do Aluno: " + nomes[cont] + " é " + media)
}       

console.log(" ")
console.log(" Notas relativas a: ")
for (let cont = 0; cont <= (nota1.length ); cont++) {}
console.log(" Trabalhos: " + nota1.length + " Provas: " + nota2.length)