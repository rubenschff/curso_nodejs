const inquirer = require('inquirer') 

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    },
]).then((answers =>{ //pode ter mais de um then, pois podemos ter varias condições
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2))/2
    console.log(`A media das notas é ${media}`)
}) 
).catch(err => console.log(err)) //podemos mostrar o erro do console ou podemos mostrar uma mensagem personalizada, como o else do if
