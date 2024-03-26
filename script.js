/*PARTIE NAVBAR RESPONSIVE*/

hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}
/*FIN PARTIE NAVBAR RESPONSIVE*/
/*NAVBAR STICKY*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 2);
})
/*FIN NAVBAR STICKY*/
