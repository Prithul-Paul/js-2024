const clock = document.querySelector(".clock");
function updateTime(){
    const date = new Date;
    const currentTime = date.toLocaleTimeString();
    clock.innerHTML = currentTime;
}
setInterval( () => {
    updateTime();
}, 1000);