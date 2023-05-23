function handleStickyScroll() {
  document.querySelector('.sticky-anchor').addEventListener('click', function() {
    var formElement = document.getElementById('wpforms-form-60');
    formElement.scrollIntoView({ behavior: 'smooth' });
  });
}

function fadeInElements() {
  var fadeElements = document.querySelectorAll('.fade-in-element');
  var windowBottom = window.innerHeight;

  function fadeIn(element) {
    var elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowBottom) {
      element.classList.add('fade-in');
    }
  }

  function handleScroll() {
    fadeElements.forEach(function(element) {
      fadeIn(element);
    });
  }

  window.addEventListener('scroll', handleScroll);
}

fadeInElements();
handleStickyScroll();