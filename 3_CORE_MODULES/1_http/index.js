const http = require("http")

const porta = 3000

const server = http.createServer((req, res) =>{
    res.write('Oi Http')
    res.end()
})

server.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
})