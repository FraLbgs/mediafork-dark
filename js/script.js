const burger = document.getElementById("mobile-button");
burger.addEventListener("click",function(e){
    document.body.classList.toggle("overflow");
    document.getElementById("main-nav").classList.toggle("display");
    document.querySelector(".fa").classList.toggle("fa-bars");
    document.querySelector(".fa").classList.toggle("fa-chevron-up");
});

const listeNL = document.querySelectorAll(".nav-link");
for(const l of listeNL){
    l.addEventListener("click", function(e){
        document.getElementById("main-nav").classList.toggle("display");
        document.querySelector(".template-dark").classList.toggle("overflow");
        document.querySelector(".fa").classList.toggle("fa-bars");
        document.querySelector(".fa").classList.toggle("fa-chevron-up");
    });
}