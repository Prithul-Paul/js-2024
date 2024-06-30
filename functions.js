function sumTwoDigits(num1, num2){
    let result = num1 + num2;
    return result;
}
let result = sumTwoDigits(2, 4);
// console.log(result);

function userLoggedIn(username){
    if(!username){
        return "Please put a valid username";
    }
    return `${username} is just logged in`;
}
// console.log(userLoggedIn());

function calculateCartPrice(val1, val2, ...num1){
    console.log(typeof val1, typeof val2, num1);
}
calculateCartPrice(200, 500, 7000, 4000)