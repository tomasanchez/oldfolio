const navSlide = () => {
    const slideButton = document.querySelector('.sbutton');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    /* Toggling bar */
    slideButton.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    /* Fade effect */
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.3}s`;
            }
        });

    });

    
}

navSlide();