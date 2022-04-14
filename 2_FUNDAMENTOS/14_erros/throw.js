const x = 10

//checar se x é um numero (numero)

if(!Number.isInteger(x)){ //se x não for integer retorna o erro
    throw new Error ('O valor de x não é um numero inteiro')
}

console.log('Continuando...')