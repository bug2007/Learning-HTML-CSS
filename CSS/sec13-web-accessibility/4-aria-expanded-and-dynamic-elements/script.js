document.addEventListener('DOMContentLoaded', function () { 
  // when the dom content loads, select the accordion-header
  const header = document.querySelector('.accordion-header');

  // listen for a click on the header
  header.addEventListener('click', () => { 
    // get the content
    const content = header.nextElementSibling;
    // get the aria-expanded and set it true
    const expanded = header.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded attribute. set it to true if it's false and vice-versa.
    header.setAttribute('aria-expanded', !expanded);

    // Toggle aria-hidden attribute
    content.setAttribute('aria-hidden', expanded);

    console.log('Accordion header clicked');
    console.log('aria-expanded:', header.getAttribute('aria-expanded'));
  });
});
