const url = require("url")

//formas de extrair valores de uma URL

const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(adress)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))