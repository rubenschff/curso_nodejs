const _ = require('lodash')

const a = [1,2,3,4,5,6]
const b = [2,5,6,7,3,9]

const diff = _.difference(a, b)

console.log(diff)