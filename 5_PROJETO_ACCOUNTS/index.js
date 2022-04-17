//modulos externos
const chalk = require("chalk")
const inquirer = require("inquirer")

//modulos internos
const fs = require("fs")

operation()

function operation() {
    inquirer.prompt([{
        type: 'list', //cria uma lista para o usuario
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ],

    }]).then((answer) => {
        if (answer['action'] === 'Criar conta') {
            crateAccount()
        } else if (answer['action'] === 'Consultar saldo') {
            getAccountBalance()
        } else if (answer['action'] === 'Depositar') {
            deposit()
        } else if (answer['action'] === 'Sacar') {
            withdraw()
        } else if (answer['action'] === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o acoounts!'))
            process.exit()
        }

    })
        .catch(err => console.log(err))
}

//function to crate an account
function crateAccount() {
    console.log(chalk.bgGreen.black('Parabens por escolher o nosso banco'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    biuldAccount()
}

//function to add an amount to user account
function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            //boolean check if account exist pass, case not return deposit function
            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto você deseja depositar?'
                }
            ]).then((answer) => {
                const amount = answer['amount']

                //add an amount
                addAmount(accountName, amount)
                operation()


            }).catch((err) => console.log(err))

        })
        .catch((err) => console.log(err))
}

//function to verify your balance acount
function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        //verify if account exist with the function
        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)
        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é R$${accountData.balance}`))

        operation()

    }).catch((err) => console.log(err))
}

//fucntion to remove an amount os your account
function withdraw() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Informe a sua conta'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if (!checkAccount(accountName)) {
            return withdraw()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja sacar',
            },

        ]).then((answer) => {
            const amount = answer['amount']
            removeAmount(accountName,amount)

        }).catch((err) => console.log(err))


    })
        .catch((err) => console.log(err))
}

//Build an account
function biuldAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite o nome da sua conta:'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName)

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts') //verificando se temos o diretorio de contas, se não tiver ele é criado
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) { //se a conta ja existe no diretório accounts  
            console.log(chalk.bgRed.black('Essa conta já existe, escolha outro nome!')) //exibe o erro
            biuldAccount() //e chama o buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`,
            '{"balance":0}',                   //balance é o saldo inicial da conta)
            function (err) {
                console.log(err)
            },
        )
        console.log(chalk.green('Conta criada com sucesso!'))
        operation()

    }).catch((err) => console.log(err))
}

//function to verify if account exist
function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Essa conta não existe, escolha outro nome!'))
        return false
    }
    return true
}

//add an amount to your account
function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, insira um valor valido!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
    console.log(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        },
    )
    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`))
}

//get an account
function getAccount(accountName) {
    const fileJson = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    })

    return JSON.parse(fileJson)
}

//fucntion to remove a value from your account
function removeAmount(accountName,amount){
    const accountData = getAccount(accountName)

    if (!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro tente novamente mais tarde!'))
        return withdraw()
    }

    if (accountData.balance < amount){
        console.log(chalk.bgRed.black('Valor indisponivel!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err){
        console.log(err)
    })

    console.log(chalk.green(`Foi realizado um saque no valor de R$${amount} da sua conta! `))
    operation()


}