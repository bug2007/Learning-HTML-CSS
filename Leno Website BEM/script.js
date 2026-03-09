document.addEventListener('DOMContentLoaded', function () {

    // toggle mobile menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // video modal
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer');

    // open video modal when clicked on play button
    videoButton.addEventListener('click', function () {
        modal.style.display = 'block';

        // replace the src attribute with the video URL
        videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

        // close modal on clicking the close button
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            videoPlayer.src = '';
        })

        // close modal on clicking outside of the video box
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        })
    });
})

// change navbar color on scrolling
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
})