const fs = require('fs')

console.log("Inicio")

fs.writeFile('arquivo.txt','ola',function(err){
    setTimeout(function(){
        console.log("Arquivo criado!")
    },1000)
})

console.log("Fim")

//executa todo o codigo, não espera a criação do arquivo