const http = require("http")
const url = require("url")
const fs = require("fs")


const porta = 3000

const server = http.createServer((req, res) =>{
    fs.readFile('mensagem.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'}) //construimos o HEAD definindo o content type
        res.write(data) //não precisamos chamar o arquivo html novamente pois ja foi atribuido ao data duas linhas acima
        return res.end() //finaliza o response
    
    })

})

server.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
})