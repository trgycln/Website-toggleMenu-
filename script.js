let toggleIcon = document.getElementById("toggleIcon");
let navMenu = document.querySelector("ul");

toggleIcon.addEventListener("click", function(){
    if(navMenu.style.display=="none"){
        navMenu.style.display="block";
    }
    else{
        navMenu.style.display="none"
    }
})