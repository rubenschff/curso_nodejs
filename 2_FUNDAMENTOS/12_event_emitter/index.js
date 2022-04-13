const EventEmitter = require('events')
const eventEmitter = new EventEmitter() //instanciando a classe events

eventEmitter.on('start',()=>{ //podemos adicionar o evento que dispara, pode ser click de um botão, qualquer paametro que inserirmos como gatilho
    console.log("Durante")
})
console.log("Antes")

eventEmitter.emit('start') //gatilho

console.log("Depois")