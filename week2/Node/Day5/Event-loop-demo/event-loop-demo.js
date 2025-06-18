

//process.nextTick() - MicroStack queue


console.log('Start')

process.nextTick(()=>{
    console.log('Inside process nextTick')
})

console.log('End')

//Process.nextTick() runs after the current operation but before any I/O or timers
//Even though its asynchrnous it executes before setTimeout and setImmediate



//setTimeout() - Timer resolution

console.log('Starting setTimeout')

setTimeout(()=>{
    console.log('Inside setTimeout')
})

console.log('Ending setTimout')

//setTimeout(..., 0) executes in the Timers Phase of the event loop.
//It's scheduled after the current call stack is empty, even if the delay is 0.


//setImmediate 

console.log('Starting setImmediate')

setImmediate(()=>{
    console.log('Starting with setImmediate')
})

console.log('Ending setImmediate ')

//setImmediate() callbacks are invoked here








