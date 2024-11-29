console.log("Hello World");
console.log("Hello booleaners");
console.log(process.argv);

const parola = process.argv[2] ?? "guest";

console.log(`Hello ${parola}`);