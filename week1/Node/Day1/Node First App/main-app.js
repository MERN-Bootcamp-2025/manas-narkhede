// Importing required Node.js modules
const fs = require('fs');
const path = require('path');
const os = require('os');

// 1. Personal info
const name = "Manas Narkhede";
const age = 24;
const isDeveloper = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Developer?", isDeveloper);

// 2. Simple calculation
const num1 = 10;
const num2 = 5;
const result = num1 * num2;
console.log("Multiplication Result:", result);

// 3. File system: write and read
const filePath = path.join(__dirname, 'info.txt');
const content = `Name: ${name}\nAge: ${age}\nDeveloper: ${isDeveloper}`;
fs.writeFileSync(filePath, content);
const readData = fs.readFileSync(filePath, 'utf-8');
console.log("File content:\n", readData);

// 4. Using OS module
console.log("User Home Directory:", os.homedir());
console.log("System Uptime:", os.uptime(), "seconds");
console.log("Platform:", os.platform());

// 5. Using Process object
console.log("Current Working Directory:", process.cwd());
console.log("Node Version:", process.version);
