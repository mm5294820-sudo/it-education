let humicon=document.getElementsByClassName("fa-bars")[0]
let menus=document.getElementsByClassName("menu")[0]
let close=document.getElementsByClassName("fa-xmark")[0]

humicon.addEventListener("click",function(){
    menus.classList.add("menu-active")
    humicon.classList.add("fa-bars-remove")
    document.body.classList.add("blur-active")
});

close.addEventListener("click",function(){
    menus.classList.remove("menu-active")
    humicon.classList.remove("fa-bars-remove")
    document.body.classList.remove("blur-active")
})