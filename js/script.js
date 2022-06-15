const burger = document.querySelector(".nav-burger");
burger.addEventListener("click",function(e){
    console.log("test")
    document.querySelector(".nav-list").classList.toggle("nav-list-burg");
    // document.querySelector(".nav").classList.add("nav-burg");
    // document.querySelector(".logo").classList.add("logo-burg");
    document.querySelector(".fa").classList.toggle("fa-bars");
    document.querySelector(".fa").classList.toggle("fa-angle-up");
    // document.querySelector(".header-container").classList.add('header-container-burg');
    const listeNI = document.querySelectorAll(".nav-item");
    for(const l of listeNI){
        l.classList.toggle("nav-item-burg");
    }
    const listeNL = document.querySelectorAll(".nav-link");
    for(const l of listeNL){
        l.classList.toggle("nav-link-burg");
    }

    document.querySelector(".nav").classList.toggle("nav-burg");
    document.querySelector(".header").classList.toggle("header-burg");

});