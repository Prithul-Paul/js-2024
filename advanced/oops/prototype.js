const myHero = ["thor", "spiderman"];
const heroPower = {
    thor: "Hammer",
    spiderman: "Web",
    getSpidyPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
};

Object.prototype.newPrototype = function(){
    console.log(`This prototype is present in all object`);
}

Array.prototype.newArrayPrototype = function(){
    console.log(`This is Array prototype`);
}
// heroPower.newPrototype();
// myHero.newPrototype();
// myHero.newArrayPrototype();

const myName = "Prithul      ";
String.prototype.trueLength = function(){
    return `Actual length is ${this.trim().length}`;
}

console.log(myName.trueLength());