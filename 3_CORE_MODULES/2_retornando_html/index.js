const http = require("http")

const porta = 3000

const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Olá, esse é o meu primeiro servisor HTML </h1>')
})

server.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
})