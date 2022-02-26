const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const clos = document.getElementById('close');
const btn = document.getElementById('btn-contrib');
const con = document.getElementById('Contibutor');
if(bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
if(clos){
    clos.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}
btn.addEventListener("click",()=>{
    console.log('clicked');
    con.classList.toggle('active');
    if (con.style.display === "block") {
        con.style.display = "none";
      } else {
        con.style.display = "block";
      }
}
)


