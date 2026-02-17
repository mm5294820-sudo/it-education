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

const cnicInput = document.getElementById('cnic-no');

if (cnicInput) {
    cnicInput.addEventListener('input', function (e) {
        let input = e.target;

        let value = input.value.replace(/\D/g, '').substring(0, 13);

        let formattedValue = '';
        if (value.length > 0) {

            formattedValue = value.substring(0, 5);
        }
        if (value.length > 5) {

            formattedValue += '-' + value.substring(5, 12);
        }
        if (value.length > 12) {
            formattedValue += '-' + value.substring(12, 13);
        }

        input.value = formattedValue;
    });
}
