const button = document.querySelector('#button')
const heading = document.querySelector('h1');

button.addEventListener('click', function () {
    // add a class of dark to the body
    document.body.classList.toggle('dark');

    heading.classList.toggle('yellow');
})