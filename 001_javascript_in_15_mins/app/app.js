
let c = 1;
c = 1.111;
c = "aaa";
c = [];
c = { //object
  name: "gabriel"
}
c = function (p) {
  return "a"
}
c = undefined;
c = NaN;
c = null;
c = "a";
//compare

console.log("1" == 1);
console.log("1" === 1);
//block vs function scope - IIFE

(function (name) {
  var upName = name.toUpperCase();
  console.log(upName);
})('Boo');

function shout(msg = 'heeey') {
  console.log(`${msg} ...`)
}
const yell = function (msg = "yeeeeah") {
  console.log(msg)
}
const scream = (msg = 'arghh') => {
  console.log(msg)
}

shout();
yell();
scream();

const o = {
  name: "Gab",
  intro: function () {
    console.log(this.name)
  }
}

const O2 = function (name, intro) {
  this.name = name;
  this.intro = intro;
}
const o2 = new O2("Rick", () => {
  console.log("name:")
});
o2.intro();

class O3 {
  constructor(name) {
    this.name = "name"
  }
  outro(){
    console.log("out")
  }
}

O3.prototype.intro = () => {
  console.log("Rghhh")
}
const o3 = new O3("Rick")
o3.intro();
o3.outro();

//function accepting a param and an object
const check = (value, conditions) => {
  console.log(`Evaluating ${value}`);
  for (cond in conditions) {//iterate props
    console.log(`- ${cond} -> ${conditions[cond].call(this, value)} `)
  }
}
check("check", {
  "first": (res) => res === "check",
  "second": (boo, roo) => boo === "check" //podstawienie jest "best-effort"
})

const arr = [1, 2, 3, "aa", {}, () => { }]
arr.push(1);
arr.unshift(2)
for (element of arr) {
  console.log(element)
}
arr.forEach((element) => {
  console.log(element)
})

const [a,b,...rest] = [1,2,3,4,4]
console.log(rest)