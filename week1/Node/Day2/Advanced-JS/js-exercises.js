// exercise1.js
// Exercise 1: Reference Types Deep Dive

// Primitive vs Reference Types
let num1 = 10;
let num2 = num1;
num2++;
console.log("Primitive type:", num1, num2); // 10, 11

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value++;
console.log("Reference type:", obj1.value, obj2.value); // 11, 11

// Shallow copy
let shallowCopy = { ...obj1 };
shallowCopy.value = 100;
console.log("Shallow copy:", obj1.value, shallowCopy.value); // 11, 100

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(obj1));
deepCopy.value = 50;
console.log("Deep copy:", obj1.value, deepCopy.value); // 11, 50

// Reference in functions
function modify(obj) {
  obj.changed = true;
}
const refObj = {};
modify(refObj);
console.log("Modified in function:", refObj); // { changed: true }


// exercise2.js
// Exercise 2: Spread & Rest Operators Mastery

// Spread operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Merged arrays:", arr2);

const user = { name: "Alice" };
const updatedUser = { ...user, age: 25 };
console.log("Updated user:", updatedUser);

// Rest operator in function
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3));

// Rest in destructuring
const [first, ...rest] = [10, 20, 30];
console.log("Rest elements:", rest);

const { name, ...restProps } = updatedUser;
console.log("Rest properties:", restProps);


// exercise3.js
// Exercise 3: Destructuring Assignment Practice

const userInfo = {
  id: 1,
  profile: {
    name: "Bob",
    contact: {
      email: "bob@example.com",
    },
  },
};

// Nested destructuring
const {
  profile: {
    name: userName,
    contact: { email },
  },
} = userInfo;
console.log("User:", userName, email);

// Array destructuring with defaults
const [x = 1, y = 2, z = 3] = [10];
console.log("With defaults:", x, y, z);

// Destructuring in function parameters
function greet({ name = "Guest" }) {
  console.log("Hello,", name);
}
greet({ name: "Alice" });
greet({});


// exercise4.js
// Exercise 4: Promise & Async Fundamentals

// Basic Promise
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

getData()
  .then(data => {
    console.log(data);
    return "Next step";
  })
  .then(step => console.log(step))
  .catch(err => console.error(err));

// Async/Await with error handling
async function fetchData() {
  try {
    const res = await getData();
    console.log("Async/await:", res);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchData();


// exercise5.js
// Exercise 5: Practical Application (User Management)

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function findUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);
      if (user) resolve(user);
      else reject("User not found");
    }, 500);
  });
}

async function showUser(id) {
  try {
    const user = await findUser(id);
    console.log("User:", user);
  } catch (err) {
    console.error(err);
  }
}

showUser(1);
showUser(3);
