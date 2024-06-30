let c = 100;
if( true){
    let a = 10;
    const b = 30;
    // console.log(c);
    // let c = 40;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let userName = "Prithul Paul";
    function two(){
        let email = "ptithulpaul@gmial.com"
        // console.log(userName);
    }
    // console.log(email);
    two()
}
one()

console.log(addOne(5)); 
function addOne(value){
    return value+1;
}

console.log(addTwo(5));
const addTwo = function(value){
    return value+2;
}