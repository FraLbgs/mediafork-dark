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

