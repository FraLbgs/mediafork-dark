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

// const mods = document.getElementById("mods");
// const cards = document.querySelectorAll("li .card");
// const close = document.querySelectorAll(".modal-content");

// for(const c of cards){
//     c.addEventListener("click", function(e){
//         document.getElementById(this.dataset.serv).classList.add("visibility");
//     });
// }

// for(const c of close){
//     c.addEventListener("click", function(e){
//             this.classList.remove("visibility");
//         });
// }

const services = document.getElementById("services");
const cards = document.querySelectorAll("li .card");
const mods = document.createElement("div");
mods.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
mods.appendChild(modalContent);

for(const c of cards){
    c.addEventListener("click", function(e){
        const modal =
                    '<i class="fa fa-times" aria-hidden="true"></i>'+
                    '<h3 class="modal-title">'+document.getElementById(this.dataset.ttl).innerText+'</h3>'+
                    '<img class="modal-icon" src="'+document.getElementById(this.dataset.img).src+'" alt="Web services">'+
                    '<p class="modal-info">'+this.dataset.info+'</p>';
        
        modalContent.innerHTML=modal;
        console.log(mods);
        services.appendChild(mods);
        services.appendChild(document.getElementById("cards"));
        mods.classList.add("visibility");
        
    });
}

modalContent.addEventListener("click",function(e){
    mods.classList.remove("visibility");
});