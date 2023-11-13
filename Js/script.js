// Function ScrollTop

function goTo(element,speed) {
    var href = element.attr('href');
    var top = $(href).offset().top;

    $("html,body").animate({scrollTop : top}, speed);
}

$(function(){
    $("#top a").click(function(e){
        e.preventDefault();
        goTo($(this),600);
    })
})


/** Efeito Link */

var link = document.querySelectorAll(".nav ul li a");

link[1].style.color ='#7700ff';
link[1].style.borderBottom = '0px solid';
link[2].style.color ='#7700ff';
link[2].style.borderBottom = '0px solid';

link[1].addEventListener('mouseover',()=>{
    link[1].style.color ='#000';
    setTimeout(()=>{
        link[1].style.color ='#7700ff';
    },1000)
})


link[2].addEventListener("mouseover",()=>{
    link[2].style.color ='#000'
    setTimeout(()=>{
        link[2].style.color ='#7700ff';
    },1000)

})


//Efeito NavBar

var nav = document.querySelector(".nav");

setTimeout(()=>{
    nav.classList.add("navStyle")
},1000)
