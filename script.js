// add class navbarDark on navbar scroll
/*  The header holds the value of the nav element since the querySelector method returns the first element that matches the CSS selector (which is .navbar in this case).
window.onscroll fires up when the scroll event happens.
window.scrollY returns the number of pixels that the document is scrolled vertically and its value is assigned to a variable named top.
If the value of top is greater than or equal to 100, it adds a class of navbarDark to the header.*/
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}