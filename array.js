let myArr = [0, 1, 2, 3, 4]

let myHeros = new Array("Spider-Man", "Super-Man", "Bat-Man");
let marvelHeros = new Array("Spider-Man", "Iron-Man", "Thor");
let dcHeros = new Array("Super-Man", "Bat-Man", "Flash");
// myHeros.push("Iron-Man");
// myHeros.pop();
// myHeros.unshift("Iron-Man");
// myHeros.shift();

// console.log(myHeros.includes("Super-Man"));
// console.log(myHeros.indexOf("-Man"));

// let newArr = myHeros.join();
// console.log(typeof myHeros);
// console.log(typeof newArr);

// let myNewArr = myArr.slice(1, 3); /** Create a new array without modifying the original array */
// console.log(myNewArr);

// myArr.splice(1, 3); /** Modify the original array by deleting the array elements */
// console.log(myArr);
// console.log(myNewArr);

// marvelHeros.push(dcHeros); /** It dosn't merge the arrays, it push the array into the array */
// console.log(marvelHeros[3]);

// let concateArr = marvelHeros.concat(dcHeros); /** It merges two arrays and returns it a new array */
// console.log(concateArr);

// let anotherArr = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11]]];
// let realArr = anotherArr.flat(Infinity); /** It merges into one array and spreads the elements and returns the array */
// console.log(realArr);


let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log(Array.of(score1, score2, score3, score4));

