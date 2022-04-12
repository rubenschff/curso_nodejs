//lendo o nome pelo terminal

console.log(process.argv)

const args = process.argv.slice(2) //captura a partir do terceiro indice
console.log(args) // armazena o valor

const nome = args[0].split("=")[1] // pega a posição inicial do array e ao encontrar o = corta e transefere o restante para a variavel
console.log(nome)