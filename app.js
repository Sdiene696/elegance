const menuBtn = document.querySelector(".menu")
const navBar = document.querySelector("nav ul")

menuBtn.addEventListener('click',afficheBardeNav)

function afficheBardeNav(){
	  	
	menuBtn.querySelector("i").classList.toggle("fa-close")
  navBar.classList.toggle('active')
}


 document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type:'loop',
        autoplay:true,
        interval:2000
    });
    splide.mount();
  } );
