const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
    }, 1000);

});
promiseOne.then(()=>{
    console.log("Promise Consumed");
})



// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async 2 Task Completed");
//         resolve();
//     }, 1000)
// }).then(()=>{
//     console.log("Promise Consumed");
// })


// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username: "Prithul Paul", email: "ptithulpaul@gmail.com"});
//     }, 1000);
// })
// promiseThree.then((data)=>{
//     console.log(data);
// })


// const promiseFour = new Promise((resolve, reject) => {
//     const error = false;
//     if(!error){
//         resolve({username: "prithul_paul", password: "123"});
//     }else{
//         reject({error: "Something went worng"})
//     }
// });
// promiseFour.then((user)=>{
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{x``
//     console.log("Async is finally resolved");
// })

// const promiseFive = new Promise((resolve, reject) => {
//     const error = true;
//     if(!error){
//         resolve({username: "prithul_paul", password: "123"});
//     }else{
//         reject({error: "Something went worng"})
//     }
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();

// async function getAllDetail(){
//     try {
//         const response = await fetch("https://api.github.com/users/Prithul-Paul");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllDetail();

fetch("https://api.github.com/users/Prithul-Paul").then((data)=>{
    const response = data.json();
    // console.log(response);
    return response
}).then((response) =>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})