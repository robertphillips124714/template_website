

const navSlide = () => {
    
    const burger = document.getElementById('burger');
    const nav = document.getElementById('buttons');
    const navlinks = nav.childNodes

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        nav.classList.toggle('nav-inactive');
        
        // Animate Links
        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation=''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index * 3 / 7 + .5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');

    });
        
};

navSlide();