const http = require("http")
const fs = require("fs")


const porta = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' }) //construimos o HEAD definindo o content type
            res.write(data) //não precisamos chamar o arquivo html novamente pois ja foi atribuido ao data duas linhas acima
            return res.end() //finaliza o response
        })
    } else {
        fs.writeFile("arquivo.txt", name, function (err, data) {
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()
        })
    }

})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})