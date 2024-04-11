//. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

import * as inputHandle from "prompt-sync";

let name: string = `\t \n Ramzan Khedrov \t \n `;

console.log(name);

const stripped_name: string = name.trim();
console.log(stripped_name);

