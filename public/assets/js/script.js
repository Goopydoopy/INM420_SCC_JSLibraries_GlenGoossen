document.addEventListener('DOMContentLoaded', function() {
    //Glide.js
    new Glide('.glide').mount();

    //Granim.js
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ['#00F260', '#0575E6'],
                    ['#e1eec3', '#f05053']
                ]
            }
        }
    });

    //AOS (Animate On Scroll) library
    AOS.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
    });
});

//EXPLORE BUTTON NAV
function scrollToOurShopSection() { 
    const ourShopSectionY = document.getElementById('our-shop').offsetTop;

    // Scroll to the our shop section smoothly!
    window.scrollTo({
        top: ourShopSectionY,
        behavior: 'smooth'
    });
}
