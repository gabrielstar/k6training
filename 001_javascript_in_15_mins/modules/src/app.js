//we use some 2015+ features(modules) so to be comaptible with browsers we need to transpile code to es5
//babel and webpack will do that and produce from app.js -> build/app.bundle.js that we use in index.html

//npm install - installs node packages
//npm start - starts dev server

// There are two ways to implement module functionality in JS
//- CommonJS syntax
//- es2015 syntax

//CommonJS syntax
const pers = require('./mymodule1CommonJS');//import of module
console.log(pers.name) //use of modukle

//es2015 syntax

import { person, sayHello } from './mymodule2es2015'
console.log(person);
console.log(sayHello())

import * as mod from './mymodule2es2015' //we can alias all module exports to avoid namespace clashes
console.log(mod.sayHello());

import greeting from './mymodule2es2015'; //curly braces can be omitted for default exported elements
console.log(greeting);

