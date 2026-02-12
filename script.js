let humicon=document.getElementsByClassName("fa-bars")[0]
let menus=document.getElementsByClassName("menu")[0]
let close=document.getElementsByClassName("fa-xmark")[0]
let course=document.getElementsByClassName("courses")[0]
let iconangledown=document.getElementsByClassName("fa-angle-down")[0]
let courseItem=document.getElementsByClassName("course-item")[0]

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

course.addEventListener("click",function(){
    courseItem.classList.toggle("course-items-active")
    iconangledown.classList.toggle("fa-angle-down")
    iconangledown.classList.toggle("fa-angle-up")
})
