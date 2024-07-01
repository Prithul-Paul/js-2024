/** IF-ELSE Condition **/

const userLoggedIn = true;

if(userLoggedIn){
    // console.log("User Logged in");
}

/**Truthy and Falsy Condition */

// Falsy Value ==> false, 0, -0, "", null, NaN
// Truthy Value ==> "0", 'false', " ", [], {}, function(){} -> Empty function



const userEmail = "prithulpaul@gmail.com";
const emptyAray = [];


if(userEmail){
    console.log(`Email Exsists`);
}else{
    console.log(`Email Does not Exsists`);
}

if(emptyAray.length === 0){
    console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

/** Nullish coalescing operator (??): null, undifined */

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = null ?? 10 ?? 20;
console.log(val1);

/** Ternary Operator */
const check = (5 == 6) ? console.log("True") : console.log("False"); 
