// ==============================
// Exercise 1: let, const, var
// ==============================

function varExample() {
  var a = 10;
  if (true) {
    var a = 20;
    console.log("var inside block:", a); // 20
  }
  console.log("var outside block:", a); // 20
}

function letExample() {
  let b = 10;
  if (true) {
    let b = 20;
    console.log("let inside block:", b); // 20
  }
  console.log("let outside block:", b); // 10
}

function constExample() {
  const c = 10;
  console.log("const:", c);
}

varExample();
letExample();
constExample();

// const with object and array
const obj = { name: "Manas" };
obj.name = "Updated";
console.log(obj);

const arr = [1, 2];
arr.push(3);
console.log(arr);

// ==============================
// Exercise 2: Functions
// ==============================

function add1(x, y) {
  return x + y;
}

const add2 = function(x, y) {
  return x + y;
};

const add3 = (x, y) => {
  return x + y;
};

const add4 = (x, y) => x + y;

console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
console.log(add4(2, 3));

// this keyword
const demo = {
  name: "Manas",
  normal: function() {
    console.log("Normal:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  }
};

demo.normal();
demo.arrow();

// Higher-order function
function multiplyBy(n) {
  return function(x) {
    return x * n;
  };
}
const double = multiplyBy(2);
console.log(double(5));

// ==============================
// Exercise 3: Object
// ==============================

const person = {
  name: "Manas",
  age: 24,
  address: {
    city: "Pune"
  },
  greet() {
    console.log("Hi", this.name);
  }
};

person.greet();

// Destructuring
const { name, address } = person;
console.log(name, address.city);

// Spread
const extra = { country: "India" };
const full = { ...person, ...extra };
console.log(full);

// Access + modify
console.log(person.age);
person.age = 25;
console.log(person.age);

// ==============================
// Exercise 4: Array Methods
// ==============================

const numbers = [1, 2, 3, 4, 5];

const mapped = numbers.map(n => n * 2);
console.log("map:", mapped);

const filtered = numbers.filter(n => n > 2);
console.log("filter:", filtered);

const total = numbers.reduce((acc, val) => acc + val, 0);
console.log("reduce:", total);

const found = numbers.find(n => n === 3);
console.log("find:", found);

const hasEven = numbers.some(n => n % 2 === 0);
console.log("some:", hasEven);

// Destructuring
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// ==============================
// Exercise 5: Modern JS
// ==============================

const username = "Manas";
console.log(`Hello ${username}, today is ${new Date().toDateString()}`);

// Default param
function greet(user = "Guest") {
  console.log("Hi", user);
}
greet();
greet("Manas");

// Rest + Spread
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));

const a = [1, 2];
const b = [...a, 3, 4];
console.log(b);

// Optional chaining
const data = {
  info: {
    city: "Mumbai"
  }
};
console.log(data.info?.city);

// Nullish coalescing
const bio = null;
console.log(bio ?? "No bio");
