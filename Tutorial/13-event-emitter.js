const { EventEmitter } = require('events')

//Event declation
const customEventEmitter = new EventEmitter();

//Event handler registeration for specific event
customEventEmitter.on('event1', () => {
    console.log('event1 handler recieved the message');
})

//Event handler registeration for specific event
customEventEmitter.on('event2', (data) => {
    console.log(`event1 handler recieved the message: ${ data }`);
})

//firing of an event
customEventEmitter.emit('event1')
customEventEmitter.emit('event2', 'brajith')