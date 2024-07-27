const pivalue = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(pivalue);
// console.log(Math.PI)

const myObj = {
    username : "Prithul",
    email : "prithul@gmail.com",
    phone : "628980536",
    details : function(){
        console.log(this);
    }
}
console.log(Object.getOwnPropertyDescriptor(myObj, "username"));
Object.defineProperty(myObj, "username", {
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(myObj, "username"));

for( let [key, value] of Object.entries(myObj) ){
    if(typeof value !== "function"){
        console.log(`${key} => ${value}`);
    }
}