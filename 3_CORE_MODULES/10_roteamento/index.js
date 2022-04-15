const http = require("http")
const fs = require("fs")
const url = require("url")


const porta = 3000

const server = http.createServer((req, res) => {

    const query = url.parse(req.url, true)
    const fileName = query.pathname.substring(1)

    if (fileName.includes('html')) {
        if (fs.existsSync(fileName)){
            fs.readFile(fileName, function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' }) //construimos o HEAD definindo o content type
                res.write(data) //não precisamos chamar o arquivo html novamente pois ja foi atribuido ao data duas linhas acima
                return res.end() //finaliza o response
            })
        }else{
            fs.readFile("404.html", function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' }) //construimos o HEAD definindo o content type
                res.write(data) //não precisamos chamar o arquivo html novamente pois ja foi atribuido ao data duas linhas acima
                return res.end() //finaliza o response
            })
        }
    } 

})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})