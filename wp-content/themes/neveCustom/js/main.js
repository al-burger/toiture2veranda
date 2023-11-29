function handleStickyScroll() {
  var stickyAnchor = document.querySelector(".sticky-anchor");

  // Vérifier si l'élément sticky-anchor existe
  if (stickyAnchor) {
    stickyAnchor.addEventListener("click", function () {
      var formElement = document.getElementById("wpforms-form-60");
      formElement.scrollIntoView({ behavior: "smooth" });
    });
  }
}
function handleStickyHeader() {
  var header = document.querySelector(".header");
  var lastScrollTop = 0;

  function handleScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // L'utilisateur fait défiler vers le bas, masquez le header
      header.classList.add("header-hidden");
    } else {
      // L'utilisateur fait défiler vers le haut, affichez le header
      header.classList.remove("header-hidden");
    }

    lastScrollTop = scrollTop;
  }

  window.addEventListener("scroll", handleScroll);
}
function fadeInElements() {
  var fadeElements = document.querySelectorAll(".fade-in-element");
  var windowBottom = window.innerHeight;

  function fadeIn(element) {
    var elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowBottom) {
      element.classList.add("fade-in");
    }
  }

  function handleScroll() {
    fadeElements.forEach(function (element) {
      fadeIn(element);
    });
  }

  window.addEventListener("scroll", handleScroll);
}
function handleAlignfullAnimation() {
  var alignfullElement = document.querySelector(".alignfull .wp-block-group-is-layout-constrained");

  if (alignfullElement) {
    var initialPosition = alignfullElement.getBoundingClientRect().left;

    window.addEventListener("scroll", function () {
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      var displacement = (scrollY * 0.5); // Vous pouvez ajuster ce coefficient selon votre besoin

      // Appliquez la transformation CSS pour le déplacement
      alignfullElement.style.transform = "translateX(-" + displacement + "px)";

      // Ajustez l'opacité en fonction du déplacement
      var opacity = 0.5 - (displacement / initialPosition);
      alignfullElement.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
    });
  }
}


window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  // Sélectionnez les éléments avec les classes 'nv-post-cover' ou 'wp-block-cover__image-background'
  const parallaxElements = document.querySelectorAll(".nv-post-cover, .parallax-elem");

  // Parcourez chaque élément et appliquez le style
  parallaxElements.forEach(function (parallaxElement) {
    parallaxElement.style.backgroundPositionY = -(scrollY * 0.25) + "px";
  });
});


fadeInElements();
handleStickyScroll();
handleStickyHeader();// Appelez la fonction pour gérer l'animation de 'alignfull'
handleAlignfullAnimation();