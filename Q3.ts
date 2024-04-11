// Name Cases: Store a person’s name in a variable, and then print that person’s name in
//lowercase, uppercase, and titlecase.



import * as takeInput from "prompt-sync";

let object = takeInput();

let name: string = object("Please enter your name :");

console.log("Name in upper-case", name.toUpperCase());
console.log("Name in lower-case", name.toLowerCase());
//split the name in first name and last name then i'll capitilize the first word
const name_array: string[] = name.split(" ");
const first_name: string = name_array[0];
const last_name: string = name_array[name_array.length - 1];

console.log(
  "Name in title-case",
  first_name.charAt(0).toUpperCase() + first_name.slice(1),
  last_name.charAt(0).toUpperCase() + last_name.slice(1)
);
