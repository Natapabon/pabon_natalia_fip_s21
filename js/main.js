(() => {
  const button = document.querySelector("#button"),
        burgerCon = document.querySelector("#burgerCon"),
        navLinks = burgerCon.querySelectorAll("a");

  //functions go in the middle (our app instructions)
  function showNavigation() {
    //turn the button for some UX microinteractivity
    button.classList.toggle("expanded");

    //show the mobile navigation manu classList
    burgerCon.classList.toggle("slideToggle");
  }

  //event handling goes at the bottom
  button.addEventListener("click", showNavigation);

  for (link of navLinks) {
    link.addEventListener("click", showNavigation);
  }

})();
