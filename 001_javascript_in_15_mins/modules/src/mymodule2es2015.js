//module can be anything function ,string, classses
//commonJS syntax module.exports = {}
//es2015 syntax below:

export const person = { //this can be accessed from other files e.g. k6 uses this syntax we use export keyword
  name: "John",
  email: "Dan"
}

export function sayHello() {
  return `hello ${person.name}`
}

//default keyword allows to omit {} in importing script
//const greeting = function () { console.log('Hello World again'); };
//export default greeting; //if we use default then there is no need for curly braces in importing file

//if you export anonymous function then you name it at import so in importing script
export default function () { console.log(' x Hello World again'); };