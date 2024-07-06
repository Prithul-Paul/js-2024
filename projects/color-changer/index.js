// console.log("Loaded");
const buttons = document.querySelectorAll(".button");
const body = document.body;
buttons.forEach((btns)=>{
    // console.log(btns);
    btns.addEventListener("click", (e)=>{
        body.style.backgroundColor = e.target.id;
    })

})
// console.log(buttons);