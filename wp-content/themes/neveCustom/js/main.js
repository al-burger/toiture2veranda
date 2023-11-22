function handleStickyScroll() {
  var stickyAnchor = document.querySelector('.sticky-anchor');

  // Vérifier si l'élément sticky-anchor existe
  if (stickyAnchor) {
    stickyAnchor.addEventListener('click', function() {
      var formElement = document.getElementById('wpforms-form-60');
      formElement.scrollIntoView({ behavior: 'smooth' });
    });
  }
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


window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const parallaxElement = document.querySelector('.nv-post-cover');
  if (parallaxElement) {
    parallaxElement.style.backgroundPositionY = -(scrollY * 0.25) + 'px';
  }
});


fadeInElements();
handleStickyScroll();