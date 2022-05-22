const express = require("express")
const app = express()
const port = 3000 //variavel ambiente

const path = require("path")

const basePath = path.join(__dirname, 'template')

//ler o body
app.use(
    express.urlencoded({
        extended: true
    })
)
//convertendo os dados lidos pra json
app.use(express.json())

app.get('/users/add', (req, res) =>{
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req,res) =>{
    console.log(req.body) //precisamos contruir o ler body que estã na linha 9
} )

app.get('/users/:id',(req, res) => {
    const id = req.params.id

    //leitura ou consulta de dados reais em um banco de dados
    console.log(`Estamos buscando pelo usuario ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/',(req, res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () =>{
    console.log(`App rodando na porta ${port}`)
})


