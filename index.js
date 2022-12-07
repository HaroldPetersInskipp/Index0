import { newRecipe, love } from './utils/functions.js';

const test = love("ben","heather");
let cook = newRecipe(["Love X"],[1/-Infinity],10);

cook.unshift(test);
cook.push(Infinity);
cook.splice(2, 0, 4);

console.log(cook);

// This is just to add a blank line to the console output
console.log("\n");