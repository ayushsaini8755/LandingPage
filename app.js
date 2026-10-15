let pop = document.querySelector(".pop");
let del = document.querySelector(".del");
setTimeout(() => {
    pop.style.display = "block";
}, 1500);
pop.style.display = "none";
del.addEventListener('click', ()=> {
   pop.style.display = "none"; 
})
