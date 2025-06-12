var name = "max"
var age = 29
var hasHobbies = true


// function summerizeUser(userName, userAge, userHobby){
//     return 'Name is '+userName+' age is '+userAge
// }

// console.log(summerizeUser(name, age, hasHobbies))


// Arrow function

const summerizeUser = (userName, userAge, userHobby) =>{
    return `Name is ${userName} age is ${userAge}
    hoobies are ${userHobby}`

}

console.log(summerizeUser(name, age, hasHobbies))


const add = (a, b) => a+b;

console.log(add(2,3))


//OBjects 

const person ={
    name: "manas",
    age : 23,
    greet(){
        console.log('Hi, I am '+ this.name)
    }
};

person.greet()


// Arrays 

const hobbies = ['sports', 'cooking'];

for(let hobby of hobbies){
    console.log(hobby)
}

console.log(hobbies.map(hobby => 'hobbies '+ hobby))


hobbies.push('programming')

console.log(hobbies)



// Spread operator 
const toArray = (arg1, arg2, arg3) =>{
    return [arg1, arg2, arg3];
};

const toArray1 = (...args) =>{
    return args;
}
console.log(toArray1(1,2,3,4,5,6));

console.log(toArray(1,2,3))


// destructuring 

// const {name, age} = person;
// console.log(name, age)


// ASYC 


// THis is the example of synchronous where each line
// of the code executed all at once 
// but in asynchronous it complete that function first 
// wait of that function to be completed and the move out to the next once


// synchrnous 
setTimeout(()=>{
    console.log('Timer is done'), 1000
})

console.log('hello')

//Asynchronous 

const fetchData = callback =>{
    const promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
        resolve('DONe!!'), 2000
        });
        return promise;
    });
};
