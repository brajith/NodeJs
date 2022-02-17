const names = require('../Tutorial/Modules/names')
const sayHi = require('../Tutorial/Modules/SayHi')
const data = require('../Tutorial/Modules/alternative-module-export')

sayHi(names.John)
sayHi(names.Susan)
sayHi(names.Peter)

console.log(data);
