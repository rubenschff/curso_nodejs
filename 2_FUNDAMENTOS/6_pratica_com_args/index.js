//externo
const minimist = require("minimist")
const args = minimist(process.argv.slice(2))

//interno
const soma = require("./soma").soma

const a = args['a']
const b = args['b']

soma(a, b)