// Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


import * as promptSync from "prompt-sync"
//the interface

const prompt = promptSync();

const name:string = prompt("What is your name? ");

console.log(`Hello ${name} would you like to learn some typescript today ?? `);