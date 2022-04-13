const readline = require('readline').createInterface({ //entrada e saida de dados
    input: process.stdin, //entrada
    output: process.stdout, //saida
})

readline.question('Qual é sua linguagem favorita? ',(language)=>{ 
    if(language==='Python'){
        console.log('Não curto muito :(')
    }else{
        console.log(`Caraca menor, minha linguagem preferida é ${language}`)
    }
    
    readline.close()
})