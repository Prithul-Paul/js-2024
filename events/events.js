// document.querySelector('.images').addEventListener('click', (e) => {
//     // alert("clicked");
//     console.log("Ul is clicked");
// });

// document.getElementById('honeyBagger').addEventListener('click', (e) => {
//     // alert("clicked");
//     console.log("Honey Bagger clicked");
//     e.stopPropagation();
// });

// document.querySelector(".images").addEventListener('click', (e)=>{
//     const target = e.target.parentNode;
//     target.remove();
// })

document.querySelector(".images").addEventListener('click', (e)=>{
    // console.log(e.target);
    // console.log(e.toElement);
    // console.log(e.srcElement);
    console.log(e.currentTarget);
    // target.remove();
})