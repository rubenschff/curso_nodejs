const fs = require("fs")

fs.stat('pasta', (err, stats)=>{
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isFile()) //é arquivo?
    console.log(stats.isDirectory()) //é uma pasta?
    console.log(stats.isSymbolicLink()) //verifica se é um atalho pra algum script como funciona no linux de atribuir comandos a um simples comando
    console.log(stats.ctime) //crationTime data da criação do arquivo
    console.log(stats.size)// tamanho do arquivo
})