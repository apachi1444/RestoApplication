let scroll = document.querySelector("#scroll-top");
let first_nav = document.querySelector(".the_log_out_and_cart");
let header = document.querySelector("#header");
let second_nav = document.querySelector("#sticky_navbar_modified");
let exit_button = document.querySelector("#the_exit_button_on_nav");
let menu = document.querySelector('#menu-bar');
let menu1 = document.querySelector('#menu-bar1');
let navbar = document.querySelector('.navbar');




window.onscroll = () =>{

  var the_image = document.querySelector(".slideshow-container");
  var texts = document.querySelectorAll(".numbertext");
  var sticky = the_image.offsetHeight;
  var sticky1 = header.offsetHeight; 



  if(window.scrollY > second_nav.offsetHeight){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

  if (window.scrollY >(header.offsetHeight - 20) ) {
    header.classList.add("sticky");
    
    for ( i = 0 ; i < texts.length ; i++)
    texts[i].classList.add("numbertext1");
    } 
    else {
    $('#the_exit_button_on_nav').remove();
    header.classList.remove("sticky");
    for ( i = 0 ; i < texts.length ; i++)
    texts[i].classList.remove("numbertext1");
  }
}
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

menu1.onclick = () =>{
  menu1.classList.toggle('fa-times');
  
  navbar.classList.toggle('active');

}

scroll.onclick = () =>{
  first_nav.scrollHeight = 0;
}

exit_button.onclick =() =>{
  header.classList.remove("sticky");
}





//les_images_au_début
var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function currentSlide(n) {
          showSlides(slideIndex = n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace("active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }


const prev  = document.querySelector('.prev1');
const next = document.querySelector('.next1');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})



$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});







