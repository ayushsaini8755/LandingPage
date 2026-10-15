let pop = document.querySelector(".pop");
let del = document.querySelector(".del");
let load = document.querySelector("#load");
setTimeout(() => {
    pop.style.display = "block";
}, 1500);
pop.style.display = "none";
del.addEventListener('click', ()=> {
   pop.style.display = "none"; 
});
load.addEventListener('click', () =>{
    pop.style.display = "none"; 
})
