let statsPage = document.querySelector(".stats");
let statsSpans = document.querySelectorAll(".stats .number");
let started = false;
window.addEventListener("scroll",()=>{
    if(window.scrollY >= statsPage.offsetTop - 300){
    if(started === false){
        statsSpans.forEach((span)=>{
            countUp(span);
        })
        started = true;
    }
    }
})
function countUp(el){
    let reach = el.dataset.reach;
    let count = setInterval(() => {
        el.innerHTML++;
        if(el.innerHTML === reach){
            clearInterval(count);
        }
    },2000 / reach);
}