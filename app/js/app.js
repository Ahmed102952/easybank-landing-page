const toggleMenu = document.querySelector('.toggle-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
toggleMenu.addEventListener('click', () => {
    if (toggleMenu.classList.contains('active')) { // closing menu
        toggleMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        
        
    } else { // openning menu
        toggleMenu.classList.add('active');
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        
    }
})