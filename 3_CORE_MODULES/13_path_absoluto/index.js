const path = require("path")

//path absoluto ou caminho do arquivo
console.log(path.resolve('teste.txt'))

//formar um path

const midFolder = "relatorios" //arquivos dinamicos
const fileName =  "rubens.txt"

const finalPath = path.join('/', 'arquivos', midFolder, fileName) //como uma concatenação para gerar um path usando separador /

console.log(finalPath)