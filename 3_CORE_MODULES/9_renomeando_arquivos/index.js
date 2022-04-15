const fs = require("fs")

const antigo = 'arquivo.txt'
const novo = 'novoArquivo.txt'

fs.rename(antigo, novo, function (err) {
    if (err) {
        console.log(err)
        return
    }
})

console.log(`O arquivo ${antigo} foi renomeado para ${novo}`)