import chalk from "chalk"
import inquirer from "inquirer"

inquirer.prompt([
    {
        name:'nome',
        message:'Qual seu nome?'
    },
    {
        name:'idade',
        message:'Qual sua idade?'
    }
]).then((answers =>{
    console.log(chalk.bgYellow.black(`O nome do Usuario é ${answers.nome} e sua idade é ${answers.idade}`))
})).catch(err =>{
    console.log(`Não foi possivel ler os valores ${err}`)
})

    





