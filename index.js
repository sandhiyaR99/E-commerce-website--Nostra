// offerclose
let offerclose=document.getElementById("offer-close")
let offerbar=document.getElementById("offer-bar")
offerclose.addEventListener("click",function(){
    offerbar.style.display="none"
})

// sidemenu
let menu=document.getElementById("menu")
let sidenavbar=document.querySelector(".side-navbar")
let sidenavbarclose= document.getElementById("side-navbar-close")
menu.addEventListener("click",function(){
    sidenavbar.style.display="inline-block"
})
sidenavbarclose.addEventListener("click",function(){
    sidenavbar.style.display="none"
})

// slider
let sliderright=document.querySelector(".slider-right-button")
let sliderleft=document.querySelector(".slider-left-button")
let sliderimage1=document.querySelector(".slider-image1")
let sliderimage2=document.querySelector(".slider-image2")
let sliderimage3=document.querySelector(".slider-image3")
sliderright.addEventListener("click",function(){
    sliderimage1.style.left="50%"
    sliderimage2.style.left="0%"
    sliderimage3.style.left="50%"
    
})
sliderleft.addEventListener("click",function(){
    sliderimage1.style.left="50%"
    sliderimage2.style.right="50%"
    sliderimage3.style.left="0%"
    
})

//newarrival
let newarrivals=document.querySelector(".scroll-newarrivals")
let clicknewarrivals=document.getElementById("click-newarrivals")
clicknewarrivals.addEventListener("click",function(){
    newarrivals.style.position="sticky"
    newarrivals.style.top = "0"
})

//mostwanted
let mostwanted=document.querySelector(".scroll-mostwanted")
let clickmostwanted=document.getElementById("click-mostwanted")
clickmostwanted.addEventListener("click",function(){
    mostwanted.style.position="sticky"
    mostwanted.style.top = "0%"
})


