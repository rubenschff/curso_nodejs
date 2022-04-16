const _ = require('lodash') //quando instalamos uma pacote como global precisamos rodar "npm link <nome do pacote>"
                                    //vai ser feito link do pacote instalado localmente na maquina e que fica acessivel de qualquer porojeto

const arr = [1,2,2,3,4,4,5,6,7,5]

console.log(_.sortedUniq(arr))