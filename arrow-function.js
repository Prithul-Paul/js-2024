let user = {
    name: "Prithul Paul",
    price: 999,
    welcomeMsg: function(){
        console.log(`Hi ${this.name}, You'r logged in`);
        // console.log(this)
    }
}
// user.welcomeMsg();
// user.name = "Pradip Paul";
// user.welcomeMsg();
// console.log(this);

// function one(){
//     let username = "Prithul"
//     // console.log(this.username) // "this" cannot be used in the function, it is only be used in objects
// }

let one = () => {
    let username = "Prithul"
    console.log(this) // "this" cannot be used in the function, it is only be used in objects
}
one();


// let addTwoNum = (num1, num2) => { return num1+num2 }
// let addTwoNum = (num1, num2) => ( num1+num2)
// console.log(addTwoNum(5, 6));