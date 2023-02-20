/*burger Animation */
let navMenu = document.querySelector(".nav-menu")
let main = document.querySelector("main")
let header = document.querySelector("header")
let body = document.querySelector("body")

let burger = document.querySelector(".burger")
let lineOne = document.querySelector(".lineOne")
let lineTwo = document.querySelector(".lineTwo")
let lineThree = document.querySelector(".lineThree")


burger.addEventListener("click",function(){
    lineOne.classList.toggle("top-4")
    lineThree.classList.toggle("top-4")
    lineOne.classList.toggle("transformOne")
    lineThree.classList.toggle("top-6")
    lineTwo.classList.toggle("hidden");
    lineThree.classList.toggle("w-8");
    lineThree.classList.toggle("w-4");
    lineThree.classList.toggle("tranformTwo");
    
    
    navMenu.classList.toggle("showNav");
    body.classList.toggle("overflow-hidden")
    

})


/*categorie  */

let navLink = document.querySelectorAll(".nav-list .nav-link")

navLink.forEach((e)=>{
    e.addEventListener("click",function(){
        navMenu.classList.remove("showNav");
        main.classList.remove("blur")
        lineOne.classList.remove("top-4")
        lineThree.classList.remove("top-4")
        lineOne.classList.remove("transformOne")
        lineThree.classList.add("top-6")
        lineTwo.classList.add("block");
        lineTwo.classList.remove("hidden");
        lineThree.classList.add("w-4");
        lineThree.classList.remove("w-8");
        lineThree.classList.remove("tranformTwo");
        body.classList.remove("overflow-hidden")
    })
})

/* for Porfile image */

let profile = document.querySelector(".profile")
let square = document.querySelector(".square")

function adjust(){
    profile.style.backgroundColor ="white"
    square.classList.add("top-3")
    square.classList.remove("top-4")
    square.classList.add("right-28")
    square.classList.remove("right-24")
}


function normal(){
    profile.style.backgroundColor ="rgb(134 239 172)"
    square.classList.add("top-4")
    square.classList.remove("top-3")
    square.classList.add("right-24")
    square.classList.remove("right-28")
}

/* ###########  Experience Par ############  */

/*First part*/

let firstCompany = document.querySelector(".firstCompany")
let keyTab = document.querySelector(".keyTab")

let secondComapny = document.querySelector(".secondComapny")
let stemos = document.querySelector(".stemos")

let companies = document.querySelectorAll(".companies div")

let trak = document.querySelector(".trak")

companies.forEach((e)=>{
    e.addEventListener("click",function(){
        companies.forEach((e)=>{
            e.classList.remove("activeCompany")
        })
        this.classList.add("activeCompany")
    })
})

firstCompany.addEventListener("click",function(){
    trak.classList.add("top-0")
    trak.classList.remove("top-1/2")
    keyTab.classList.add("block")
    keyTab.classList.remove("hidden")
    stemos.classList.remove("block")
    stemos.classList.add("hidden")
})
secondComapny.addEventListener("click",function(){
    trak.classList.add("top-1/2")
    trak.classList.remove("top-0")
    stemos.classList.add("block")
    stemos.classList.remove("hidden")
    keyTab.classList.remove("block")
    keyTab.classList.add("hidden")
})

/*Second Part*/






/* */
