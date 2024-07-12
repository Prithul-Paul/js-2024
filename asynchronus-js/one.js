const sayMyName = function(){
    console.log("Hello Prithul Paul");
}

const changeName = function(){
    document.querySelector("h1").innerHTML = "Hello World";
}
// setTimeout(sayMyName, 2000);
const changeMyName = setTimeout(changeName, 3000);
document.querySelector("button").addEventListener('click', (e)=>{
    e.preventDefault();
    clearTimeout(changeMyName);
    console.log("Stopped");
})