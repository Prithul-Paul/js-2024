/** For of Loop */

const myArr = [1, 2, 3, 4, 5];

// for ( num of myArr ){
//     console.log(num);
// }

const greetings = "Hello World";

for ( grt of greetings){
    // console.log(grt);
}

/** For in loop */

const myObject = {
    first_name : "Prithul",
    last_name : "Paul",
    email : "ptithulpaul@gmail.com",
    phone : "6289802536",
    age : 23
}

for(const key in myObject){
    // console.log(`${key} : ${myObject[key]}`);
}

/** For each loop */
const coding = ["java", "js", "php", "python", "ruby"];
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function print(item, index, arr){
//     console.log(item, index, arr);
// }
// coding.forEach(print)

const personalDetail = [
    {
        first_name : "Prithul",
        last_name : "Paul",
        email : "ptithulpaul@gmail.com",
        phone : "6289802536",
        age : 23
    },
    {
        first_name : "Pradip",
        last_name : "Paul",
        email : "pradippaul@gmail.com",
        phone : "8420899111",
        age : 52
    },
    {
        first_name : "Suvra",
        last_name : "Paul",
        email : "suvrapaul@gmail.com",
        phone : "8420898811",
        age : 46
    }
]

personalDetail.forEach( (obj) => {
    console.log(obj.first_name);
} )

