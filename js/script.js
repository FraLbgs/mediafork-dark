// display the nav

const burger = document.getElementById("mobile-button");
const mainNav = document.getElementById("main-nav");

burger.addEventListener("click", displayNav);

mainNav.addEventListener("click", function(e){
    if(e.target.hasAttribute("href")) displayNav();
});
    
function displayNav(){
    document.body.classList.toggle("overflow");
    mainNav.classList.toggle("display");
    document.querySelector(".fa").classList.toggle("fa-bars");
    document.querySelector(".fa").classList.toggle("fa-chevron-up");
}

// making modal

const services = document.getElementById("services");

// services.addEventListener("click", function(e){
    //     if(e.target.classList.contains("card")){
        //         console.log("test");
        //     }
        // });
        
        
const serv1 = document.getElementById("serv1");
const mod1 = document.getElementById("mod1");
const croix1 = document.getElementById("croix1");

serv1.addEventListener("click", function(e){
    mod1.classList.add("visibility");
});

croix1.addEventListener("click", function(e){
    console.log("test");
    mod1.classList.remove("visibility");
    e.stopPropagation();
});