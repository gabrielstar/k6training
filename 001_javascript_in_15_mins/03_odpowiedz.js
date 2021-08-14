//recommended via constructor jak w C# lub JAVA - https://www.linkedin.com/feed/update/urn:li:activity:6832168329235439616/
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
//via object literal, recommended
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

//wyswietl standardowo
for (var obj of arr) { //of not in !
    console.log(obj['name'] + ' at ' + obj.age + " gives a sound like ")
    obj.voice()
}

//lub z wykorzystaniem lambda syntax
arr.forEach((e)=>{e.voice()})