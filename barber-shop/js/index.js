var menuBtn = document.querySelector('.menu-btn');
var mobileMenu = document.querySelector('.mobile-menu');

var btnClicked = function() {
    console.log('clicked');
    mobileMenu.classList.toggle('active');
    
}

menuBtn.addEventListener('click', btnClicked);