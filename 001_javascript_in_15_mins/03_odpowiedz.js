//via constructor similar to c# and java - recommended
class OOO {
    constructor(name, age, voice) {
        this.name = name;
        this.age = age;
        this.voice = voice;
    }
}
var ooo = new OOO("Witek", 22, () => {
    console.log("aasadasdsd")
});
//via constructor function - not recommended
var OO = function (name, age, voice) {
    this.name = name;
    this.age = age;
    this.voice = voice;
}
var oo = new OO("Romek", 12, function () {
    console.log("blrlrllr")
})
//via object literal - recommended
var o = {
    name: "Gabriel",
    age: 37,
    voice: function () {
        console.log("arghhh");
    }
};

//add to array at the beginning or end
var arr = [ooo];
arr.push(o);
arr.unshift(oo);

for (var obj of arr) { //of not in
    console.log(obj['name'] + ' at ' + obj.age + " gives a sound like ")
    obj.voice()
}
arr.forEach((e)=>{e.voice()})