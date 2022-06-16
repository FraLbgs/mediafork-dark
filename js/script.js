const burger = document.querySelector(".nav-burger");
burger.addEventListener("click",function(e){
    console.log("test")
    document.querySelector(".template-dark").classList.toggle("body-burg");
    document.querySelector(".nav-list").classList.toggle("nav-list-burg");
    document.querySelector(".logo").classList.toggle("logo-burg");
    document.querySelector(".logo-img").classList.toggle("logo-img-burg");
    document.querySelector(".logo-ttl").classList.toggle("logo-ttl-burg");
    document.querySelector(".fa").classList.toggle("fa-bars");
    document.querySelector(".fa").classList.toggle("fa-angle-up");
    document.querySelector(".header-container").classList.toggle('header-container-burg');
    document.querySelector(".nav").classList.toggle("nav-burg");
    document.querySelector(".header").classList.toggle("header-burg");
    const listeNL = document.querySelectorAll(".nav-link");
    const listeNI = document.querySelectorAll(".nav-item");
    for(const l of listeNI){
        l.classList.toggle("nav-item-burg");
    }
    for(const l of listeNL){
        l.classList.toggle("nav-link-burg");
    }


});