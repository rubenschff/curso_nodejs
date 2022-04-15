const path = require("path")

const customPath = '/relatorios/rubens/relatorio.pdf' //simulando um caminho ou path

console.log(path.dirname(customPath)) //nome do diretório
console.log(path.basename(customPath)) //nome do arquivo final
console.log(path.extname(customPath)) //tipo do arquivo o qual estamos trabalhano nesse exemplo o pdf