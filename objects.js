// object literals
const mySym = Symbol("key1")
const user = {
    name: "Prithul Paul",
    age: 23,
    email: "ptithulpaul@gmail.com",
    isLoggedIn: true,
    [mySym]: "symkey1"
}
user.email = "prithulpaul@gmail.com"
// console.log(user);
// Object.freeze(user);
// user.email = "prithul@gmail.com"
// console.log(user);

// user.greeting = function(){
//     console.log(`Hello "${this.name}"`);
// }
// console.log(user.greeting());

const regUser = {
    email: "ptithulpaul@gmail.com",
    fullName: {
        userFullName:{
            firstname: "Prithul",
            lastname: "Paul"
        }
    },
    contactNumber: {
        phone:{
            number: "6289802536"
        },
        whatsapp: {
            number: "9051882844"
        }
    }
}
// console.log(regUser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};

// console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("email"));

const {isLoggedIn:checkLogin} = user
console.log(checkLogin);
