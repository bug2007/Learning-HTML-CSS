// gonna wait for when the DOM loads. when DOM loads, we run the function.

document.addEventListener('DOMContentLoaded', function() {
    // bringing the header element into javascript
    const header = document.querySelector('.header');
    
    // another function
    function toggleHeaderTransparency() {
        //if you are not at the very top
        if (window.scrollY > 0) {
            // add a class to the header
            header.classList.add('transparent');
        // else if you are not
        } else {
            header.classList.remove('transparent');
        }
    }

    // listening for scroll. when we scroll, toggleHeaderTransparency() will run
    window.addEventListener('scroll', toggleHeaderTransparency);
})