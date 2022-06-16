const burger = document.querySelector(".nav-burger");
burger.addEventListener("click",function(e){
    document.querySelector(".template-dark").classList.toggle("body-burg");
    document.querySelector(".nav-list").classList.toggle("nav-list-burg");
    document.querySelector(".fa").classList.toggle("fa-bars");
    document.querySelector(".fa").classList.toggle("fa-angle-up");
    document.querySelector(".header-container").classList.add('header-container-burg');
    document.querySelector(".nav").classList.add("nav-burg");
    document.querySelector(".header").classList.toggle("header-burg");
    const listeNL = document.querySelectorAll(".nav-link");
    const listeNI = document.querySelectorAll(".nav-item");
    for(const l of listeNI){
        l.classList.add("nav-item-burg");
    }
    for(const l of listeNL){
        l.classList.add("nav-link-burg");
        l.addEventListener("click", function(e){
            document.querySelector(".nav-list").classList.remove("nav-list-burg");
            document.querySelector(".template-dark").classList.remove("body-burg");
            document.querySelector(".fa").classList.toggle("fa-bars");
            document.querySelector(".fa").classList.toggle("fa-angle-up");
            document.querySelector(".header").classList.remove("header-burg");
        });
    }


});